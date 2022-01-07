import { NPSActivity } from '../models/npsActivity.model';

export const INTEREST_COOKIE_KEY = 'interestshown';

export interface InterestCookieModel{
    pageVisits: string[];
    activities: NPSActivity[];
    userName: string;
}