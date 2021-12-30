import React, { useState } from 'react';
import { UserProfile } from '../models/userProfile.model';

// model that will be placed into context representing the user profile
export interface UserProfileContextState  {
    // property representing the UserProfile, undefined included to help with default value setup and avoid type-checking warnings
    userProfileObj: UserProfile | undefined;
    // property that holds the state setting method within the context logic
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
};

// Create context, note the usage of '< >' to strongly define the type.
// -- The usage of the or-ed null as part of the type allows us to pass a null in as the default value
export const UserProfileContext = React.createContext<UserProfileContextState | null>(null);

// Create a context provider component to be used when needing to setup the provider in the tree
// -- Because this is component that will be leveraged in other pages the Props will expect children components for display
export const UserProfileContextProvider = ({ children }:{   children: React.ReactNode}) => {
    // 1. Create the default user profile, to be assigned into the provider
    const defaultUserProfile: UserProfile = {
        userName: 'Guest', // default username
        preferredActivities: [] //default to an empty array of activities
    };

    // 2. Leverage the state hook to define the state logic for interacting with the user profile
    const [profileStateObj, setUserProfileState] = useState<UserProfile>(defaultUserProfile);
    
    // 3. Setup the actual component leveraging the context variable name to identify the provider
    // --- The value assigned to the provider will contain the user profile object and setter method returned for the state hook.
    // --- By placing the values from the state hook into the context, all consumers will be interacting with the same data
    return (
        <UserProfileContext.Provider value={{userProfileObj: profileStateObj, setUserProfile: setUserProfileState}}>
            {children}
        </UserProfileContext.Provider>
    );
}
