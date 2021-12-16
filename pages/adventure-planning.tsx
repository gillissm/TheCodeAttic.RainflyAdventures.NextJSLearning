import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NPSActivity } from '../lib/models/npsActivity.model';
import ImageBorder from '../lib/components/imageBorder.module';
import { DisplayImageModel } from '../lib/models/displayImage.model';
import { useState } from 'react';

const TestButtonClick: NextPage = () => {
    const [activityList, setActivity] = useState<NPSActivity[]>([]);
    const [selectedItem, setSelection] = useState<NPSActivity>({ ActivityId: '0', ActivityName: 'Pick One' });

    const imageBorderList: DisplayImageModel[] = [
        {
            ImageName: 'Arches.jpg',
            AltText: 'NPS Stamp - Arches',
            Height: 150,
            Width: 150
        },
        {
            ImageName: 'BryceCanyon.jpg',
            AltText: 'NPS Stamp - BryceCanyon',
            Height: 150,
            Width: 150
        },
        {
            ImageName: 'CraterLake.jpg',
            AltText: 'NPS Stamp - CraterLake',
            Height: 150,
            Width: 150
        },
        {
            ImageName: 'GrandCanyon.jpg',
            AltText: 'NPS Stamp - GrandCanyon',
            Height: 150,
            Width: 150
        },
        {
            ImageName: 'GrandTeton.jpg',
            AltText: 'NPS Stamp - GrandTeton',
            Height: 150,
            Width: 150
        },

    ];

    const activitySelection = (e:any) => {
        const al = activityList.find(a => a.ActivityId === e.target.value);
        if (al) {
            setSelection(al);
        }
    };

    const getActivityList = () => {
        fetch('https://developer.nps.gov/api/v1/activities?api_key=OcZVyAx6wchTN38jBcj73cHJWg82Q8X5khRVJRcN')
            .then(response => response.json())
            .then(data => {
                const al: NPSActivity[] = [];
                data.data.map((act: any) => {
                    al.push({
                        ActivityId: act.id,
                        ActivityName: act.name
                    });
                });
                setActivity(al);
            })
            .catch(error => {
                console.error(error);
                alert('error happened: ' + error);
            });
    };

    return (
        <>
            <Head>
                <title>Plan Your Next Adventure</title>
            </Head>
            <div className='containerColumn'>
                <div className='containerRow'>
                    <ImageBorder imageList={imageBorderList}/>                    
                </div>
                <div className='containerColumn'>
                    <div className='centerContainerItem'>
                        <h4 className={styles.serviceHeading}>Start Your Adventure Here...</h4>
                    </div>
                    <button onClick={getActivityList}> Get Activities</button>
                    <div id="actData" className='containerColumn'>
                        {activityList !== null && activityList.length > 0 &&
                            <div className='standardContainerItem'>
                                <select title='Pick Activity' value={selectedItem.ActivityId} onChange={activitySelection}>
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
                        }
                        {activityList === null || activityList.length <= 0 && <div className='standardContainerItem'>no data to show</div>}
                        
                        <div className='standardContainerItem'>
                            you picked: {selectedItem.ActivityName}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestButtonClick;
