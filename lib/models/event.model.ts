import { LocationModel } from './location.model';

export enum EventType{
    Hike = 'Hike',
    Overnight = 'Overnight',
    Family = 'Family',
    HighAdventure = 'High Adventure'
}

export interface EventModel{
    eventId: string;
    eventName: string;
    eventDescription: string;
    eventLocation: LocationModel;
    eventType: EventType;
    price: number;
    registrationRequired: boolean;
    dateOfEvent: string;
}