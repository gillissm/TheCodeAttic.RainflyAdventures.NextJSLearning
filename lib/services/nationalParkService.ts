import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { NPSActivity } from '../models/npsActivity.model';
import { NPSParkModel } from '../models/npsPark.model';

const _npsAPIUrl = 'https://developer.nps.gov/api/v1';
const _npsKey = 'OcZVyAx6wchTN38jBcj73cHJWg82Q8X5khRVJRcN';

export async function getNPSActivityList():Promise<NPSActivity[] | null> {
    const apiRequestUrl = `${_npsAPIUrl}/activities`;
    // 
    // fetch('https://developer.nps.gov/api/v1/activities?api_key=OcZVyAx6wchTN38jBcj73cHJWg82Q8X5khRVJRcN')
    //     .then(response => response.json())
    //     .then(data => {
    //         return data.data.map((act: any) => {
    //             return {
    //                 ActivityId: act.id,
    //                 ActivityName: act.name
    //             };
    //         });
    //     })
    //     .catch((error) => { console.error(error);});

    const response = await fetch('https://developer.nps.gov/api/v1/activities?api_key=OcZVyAx6wchTN38jBcj73cHJWg82Q8X5khRVJRcN');
    //     apiRequestUrl
    //     , { 
    //         method: 'GET',
    //         headers: new Headers({
    //             'Authorization': 'OcZVyAx6wchTN38jBcj73cHJWg82Q8X5khRVJRcN',
    //             'Content-Type': 'application/json'
    //         })
    //     }
    // );
    
    // const data = await response.json();
    // if (data !== null && data.data?.length > 0) {
    //     return data.data.map((act: any) => {
    //         return {
    //             ActivityId: act.id,
    //             ActivityName: act.name
    //         };
    //     });
    // }
    // else {
    //     console.log(data);
    // }
    return null;
}

export async function getParksForActivity(activityId: string): Promise<NPSParkModel[]|null> {
    if (activityId !== null && activityId !== undefined) {
        const apiRequestUrl = `${_npsAPIUrl}/activities/park?api_key=${_npsKey}&id=${activityId}`;
        const response = await fetch(apiRequestUrl);
        const data = await response.json();
        return data.data.map((act: any) => {
            return {
                ActivityId: act.id,
                ActivityName: act.name
            };
        });
    }

    return null;
}