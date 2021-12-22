import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NPSActivity } from '../lib/models/npsActivity.model';
import { getNPSActivityList } from '../lib/services/nationalParkService';
import { useEffect, useState } from 'react';

const AdventurePlanning: NextPage = () => {
    // 1. Configure state for activityList
    const [activityList, setActivityList] = useState<NPSActivity[]>([{ ActivityId:'0', ActivityName:"No Activities Loaded" }])

    // 2. Define useEffect, by setting the function as our list get logic
    useEffect(() => {

        getNPSActivityList()
        .then((newActivityList: NPSActivity[]) => {
            // 3. State setter method to assign the data into the state variable
            setActivityList(newActivityList);
        })
        .catch((error: any) => {
            console.error(error);
            setActivityList([{ ActivityId: '0', ActivityName: "No Activities Found" }]);
        });
        // 4. Blank array of dependencies so the method only triggers after the first render.
    }, []);
    
    // 5. HTML Render
    return ( //...full code removed to keep things simple
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>                
                <div className='containerColumn'>
                    <div className='centerContainerItem'>
                        <h4 className={styles.serviceHeading}>Start Your Adventure Here...</h4>
                    </div>
                    <div className='containerColumn'>                        
                        <ul id="actData">
                            {activityList.map((act: NPSActivity) => (
                                <li key={act.ActivityId}>{act.ActivityName} known as {act.ActivityId}</li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdventurePlanning;