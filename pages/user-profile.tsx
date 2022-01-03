import Head from 'next/head';
import { ReactElement, useContext } from 'react';
import React from 'react';
import Link from 'next/link';
import { NextPageWithLayout } from '../lib/models/global-types';
import { UserProfileContext } from '../lib/context/userProfile.context';
import UserProfileContextLayout from '../lib/components/userProfileContext.layout';
import { NPSActivity } from '../lib/models/npsActivity.model';

// Page used to set a custom username into the UserProfile Context

// Page is based on the custom NextPage type which allows for the defintion of a custom layout
const UserProfile: NextPageWithLayout = () => {

    // 1. To quickly handle the user input of a name wire the value to a reference element
    const newUsername = React.createRef<HTMLInputElement>();

    // 1.5 Create context hook
    const userContext = useContext(UserProfileContext);

    // 1.5a define the method for submitting a new username
    function submitNewUsername() {
        {/* 1.5a-1. Retrieve the current profile object and update it with the newly entered value */ }
        let temp = userContext?.userProfileObj;
        temp.userName = newUsername.current.value;

        {/* 1.5b-2. Leveraging the state setter method from context, update the user profile */ }
        userContext?.setUserProfile(temp);
    }
    // 2. HTML Render
    return (
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>
                <div className='containerColumn'>
                    <label htmlFor='namebox' > Enter a username: </label>
                    {/* 2b. tie the reference variable to the input field */}
                    <input id='namebox' type='text' ref={newUsername}></input>

                    {/* 2c. Setup the button click for submitting a new username. */}
                    <button onClick={submitNewUsername}>Submit New Username</button>
                </div>
            </div>
            <br></br>
            <div className='containerColumn'>
                <div className='containerColumn'>
                    <span>Currently Interested Activities:</span>
                    {/* #. Display to show what current interest activities are */}
                    <ul id="actData">
                        {userContext.userProfileObj.preferredActivities.map((act: NPSActivity) => (
                            <li key={act.ActivityId}>{act.ActivityName}</li>
                        ))}
                    </ul>
                </div>
                <Link href='/adventure-planning'><a className='oliveBG buttonFeel'>Start Planning an Adventure</a></Link>
            </div>
        </>
    );
};

// 3. getLayout method that allows for a custom layout to be defined for the page
UserProfile.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {/* 3a. Custom layout component that defines the user profile context provider */}
            <UserProfileContextLayout>
                {page}
            </UserProfileContextLayout>
        </>
    );
}

// 4. Export the page for rendering.
export default UserProfile;