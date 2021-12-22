import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NPSActivity } from '../lib/models/npsActivity.model';
import { getNPSActivityList } from '../lib/services/nationalParkService';

const AdventurePlanning: NextPage = () => {
    const getActivityList = () => {
        getNPSActivityList()
            .then((activityList: NPSActivity[]) => {
                document.getElementById('actData').innerHTML = activityList.map((act: NPSActivity) => {
                    return `<li>${act.ActivityName} known as ${act.ActivityId}</li>`;
                }).join(' ');
             })
            .catch((error: any) => { 
                console.error(error);
                document.getElementById('actData').innerHTML = '<li> no new records to display </li>';
            });
    };

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
                    <button onClick={getActivityList}> Get Activities</button>
                    <div className='containerColumn'>                        
                        <ul id="actData">
                            <li>List of Activities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdventurePlanning;