import Head from 'next/head';
import { ReactElement } from 'react';
import React from 'react';
import Link from 'next/link';
import ProfileLayout from '../lib/components/userProfileContext.layout';
import { NextPageWithLayout } from '../lib/models/global-types';
import { UserProfileContext } from '../lib/context/userProfile.context';
import UserProfileContextLayout from '../lib/components/userProfileContext.layout';

// Page used to set a custom username into the UserProfile Context

// Page is based on the custom NextPage type which allows for the defintion of a custom layout
const UserProfileContextPage: NextPageWithLayout = () => {

    // 1. To quickly handle the user input of a name wire the value to a reference element
    const newUsername = React.createRef<HTMLInputElement>();

    // 2. HTML Render
    return (
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>
                <div className='containerColumn'>
                    {/* 2a. UserProfileContext provider is contained in the component tree outside of the page, 
                    therefore only required to manage the consumer of the context within the page*/}
                    <UserProfileContext.Consumer>
                        {value =>
                            <>
                                <label htmlFor='namebox' > Enter a username: </label>
                                {/* 2b. tie the reference variable to the input field */}
                                <input id='namebox' type='text' ref={newUsername}></input>

                                {/* 2c. Setup the button click for submitting a new username. */}
                                <button onClick={() => {
                                    {/* 2d. Confirm value (the context object) as a profile defined if not create it */ }
                                    if (!value?.userProfileObj) {
                                        value?.setUserProfile({ userName: 'Guest', preferredActivities: [] });
                                    }

                                    {/* 2e. Retrieve the current profile object and update it with the newly entered value */ }
                                    let temp = value?.userProfileObj;
                                    temp.userName = newUsername.current.value;

                                    {/* 2f. Leveraging the state setter method from context, update the user profile */ }
                                    value?.setUserProfile(temp);
                                }}>Submit New Username</button>
                            </>
                        }
                    </UserProfileContext.Consumer>
                </div>

                <Link href='/adventure-planning'><a className='oliveBG buttonFeel'>Start Planning an Adventure</a></Link>
            </div>
        </>
    );
};

// 3. getLayout method that allows for a custom layout to be defined for the page
UserProfileContextPage.getLayout = function getLayout(page: ReactElement) {
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
export default UserProfileContextPage;