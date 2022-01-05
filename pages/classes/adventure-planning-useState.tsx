import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { NPSActivity } from '../../lib/models/npsActivity.model';
import { getNPSActivityList } from '../../lib/services/nationalParkService';
import { useState } from 'react';

const AdventurePlanning: NextPage = () => {

    // 1. Define the state for 'activityList'.
    //  setting the initial load value to a simple No Activities message
    const [activityList, setActivityList] = useState<NPSActivity[]>([{ ActivityId:'0', ActivityName:"No Activities Loaded" }])

    const getActivityList = () => {
        getNPSActivityList()
            .then((newActivityList: NPSActivity[]) => {
                // 2. Removed the loop which created the HTML and instead set the newly loaded data into the 'activityList' variable
                // This uses the setter method defined and returned as part of the useState method declaration, see line 12.
                setActivityList(newActivityList);
            })
            .catch((error: any) => {
                console.error(error);
                setActivityList([{ ActivityId: '0', ActivityName: "No Activities Found" }]);
            });
    };

    return (
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>
                <div className='containerColumn'>
                    <div className='centerContainerItem'>
                        <h4 className={styles.serviceHeading}>Start Your Adventure Here...</h4>
                    </div>
                    <button onClick={getActivityList}> Get Activities</button>
                    <div className='containerColumn'>
                        <ul id="actData">
                            {/* 3. render the data as found in our state variable */}
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