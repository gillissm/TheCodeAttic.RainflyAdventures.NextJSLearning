import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { NPSActivity } from '../models/npsActivity.model';
import { NPSParkModel } from '../models/npsPark.model';

const _npsAPIUrl = 'https://developer.nps.gov/api/v1';
const _npsKey = process.env.NEXT_PUBLIC_NPS_API_KEY;

export async function getNPSActivityList(): Promise<NPSActivity[]> {
    const apiRequestUrl = `${_npsAPIUrl}/activities?api_key=${_npsKey}`;

    const response = await fetch(apiRequestUrl);
    if (response.ok) {
        const data = await response.json();
        return data.data.map(
            (act: any) => {
                return {
                    ActivityId: act.id,
                    ActivityName: act.name
                };
            }
        );
    } else {
        console.error(response.statusText);
        return [];
    }
}

export async function getParksForActivity(activityId: string): Promise<NPSParkModel[] | null> {
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