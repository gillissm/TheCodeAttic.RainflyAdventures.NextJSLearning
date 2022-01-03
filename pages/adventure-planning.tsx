import Head from 'next/head';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { NPSActivity } from '../lib/models/npsActivity.model';
import { getNPSActivityList } from '../lib/services/nationalParkService';
import { NextPageWithLayout } from '../lib/models/global-types';
import UserProfileContextLayout from '../lib/components/userProfileContext.layout';
import { UserProfileContext } from '../lib/context/userProfile.context';


// 1. Page is based on the custom NextPage type which allows for the defintion of a custom layout
// --- Being able to set a custom layout allows for wrapping the page into the User Context Provider, without having to define all parts of it.
const AdventurePlanning: NextPageWithLayout = () => {
    // 1. Configure state for activityList
    const [activityList, setActivityList] = useState<NPSActivity[]>([{ ActivityId: '0', ActivityName: "No Activities Loaded" }])

    // 2. Define useEffect, by setting the function to retrieve the list of data
    useEffect(() => {
        getNPSActivityList()
            .then((newActivityList: NPSActivity[]) => {
                // 2a. State setter method to assign the data into the state variable
                // --- State variable will then automatically re-render the dropdown with the updated list of activities
                setActivityList(newActivityList);
            })
            .catch((error: any) => {
                console.error(error);
                setActivityList([{ ActivityId: '0', ActivityName: "No Activities Found" }]);
            });
        // 2b. Blank array of dependencies so the method only triggers after the first render.
    }, []);

    // 3. Define the user profile context consumer hook to allow access to the data set in the user profile
    // --- The object name submitted into the context hook to retrieve the context must be the same value used when definging the
    // ---  context object as well as setting up the context provider.
    // --- Best Practice is to define this in a separate file with the provider so it is easily and consistently accessed. See /lib/context/userProfile.context
    const userContextObject = useContext(UserProfileContext);

    // 4. Define the onChange event for the activities. As a new activity is selected it will be added to the current user profile context
    const activitySelection = (e: any) => {
        // 4a. Based on selected activity ID retrieve the name-value pair from the activity state list
        const al = activityList.find(a => a.ActivityId === e.target.value);

        // 4b. If the activity is found, go ahead and save into the profile
        if (al) {
            {/* 4b-1. Retrieve the current profile objects list of preferred activities to ensure existing values are kept */ }
            let temp = userContextObject?.userProfileObj?.preferredActivities;
            {/* 4b-2. Add the newly selected activity to the list of preferred activities */ }
            temp.push(al);

            {/* 4b-3. Leveraging the state setter method from context, update the user profile */ }
            userContextObject.setUserProfile({
                userName: userContextObject.userProfileObj.userName,
                preferredActivities: temp
            });
        }
    };

    // 5. HTML Render
    return (
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>
                <div className='containerColumn'>
                    <div className='centerContainerItem'>
                        {/* 5a. Grab the username from context to welcome the user by name. */}
                        <h4 className={styles.serviceHeading}>Welcome {userContextObject.userProfileObj.userName}</h4>
                    </div>
                    <div className='centerContainerItem'>
                        <h5>Get Ready to Start Planning Your Adventure...</h5>
                    </div>
                    <div className='containerColumn'>
                        <select title='Pick Activity' onChange={activitySelection}>
                            {activityList.map((al) => (
                                <option
                                    className="text-amber-900 bg-amber-100 text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4"
                                    key={al.ActivityId}
                                    value={al.ActivityId}>
                                    {al.ActivityName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='containerColumn'>
                        {/* 5b. Display to show what currently preferred activities from context */}
                        <ul id="actData">
                            {userContextObject.userProfileObj.preferredActivities.map((act: NPSActivity) => (
                                <li key={act.ActivityId}>{act.ActivityName}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='containerColumn'>
                        {/* 5c. Link to send user to the profile page to create a name, also will display any selected activities that have been added to context */}
                        <Link href='/user-profile'><a className='beigeBG buttonFeel'>Create an account to save and share this adventure.</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

// 6. getLayout method that allows for a custom layout to be defined for the page
AdventurePlanning.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {/* 6a. Custom layout component that defines the user profile context provider */}
            <UserProfileContextLayout>
                {page}
            </UserProfileContextLayout>
        </>
    );
}

// 7. Export the page for rendering.
export default AdventurePlanning;