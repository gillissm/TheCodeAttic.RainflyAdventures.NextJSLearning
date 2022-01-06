import { EventModel, EventType } from '../models/event.model';

//<summary>Method that calls to the event datasource, such as Sitecore, to retrieve active events for page generation</summary>
//<parameter> count - numeric indicating number of events that should be returned</parameter>
//<return>array of string, each string in the array represents the page name and key that will be used to retrieve the required content from the system of record during generation</return>
export async function getListOfActiveEvents(count:number): Promise<string[]> {
    
    // This method would normally make some form of an API call to the datasource (such as Sitecore)
    // -- to retrieve a list of event paths representing static pages to generate
    return ['winter-hike', 'deep-snow-scramble', 'moonlit-sledding'];
}

//<summary>Method that makes a call to the event datasource, such as Sitecore, to retrieve all data for the given event
//<parameter> eventKey - string value that is produced from the page URL as to which event should be retrieved
//<return>EventModel object with data of the given event</return>
export async function getEvent(eventKey: string): Promise<EventModel>{
    
    // To simulate a data retrieval I have statically defined data models for the events.
    // -- I have used the 'default' case to handle the non-static events that could occur.
    switch (eventKey) {
        case 'winter-hike':
            return {
                eventId: eventKey,
                eventName: 'Winter Wonderland Hike',
                eventDescription: 'Enjoy an easy hike while experiencing the wonders of winter.',
                eventLocation: {
                    locationName: 'Valley River',
                    phone: 'n/a',
                    addressCity: 'Peninsula',
                    addressState: 'OH',
                    addressZipCode: '44264',
                    addressLineOne: '5779 Riverview Rd.'
                },
                eventType: EventType.Family,
                price: 0.0,
                registrationRequired: true,
                dateOfEvent: '01/23/2022'
            };
            break;
        case 'deep-snow-scramble':
            return {
                eventId: eventKey,
                eventName: 'Deep Snow Scramble',
                eventDescription: 'Test your endurance with a difficult hike with lots of snow.',
                eventLocation: {
                    locationName: 'Hampton Hills',
                    phone: 'n/a',
                    addressCity: 'Cuyahoga Falls',
                    addressState: 'OH',
                    addressZipCode: '44223',
                    addressLineOne: '1940 W. Steels Corners Rd.'
                },
                eventType: EventType.HighAdventure,
                price: 0.0,
                registrationRequired: true,
                dateOfEvent: '02/18/2022'
            };
            break;
        case 'moonlit-sledding':
            return {
                eventId: eventKey,
                eventName: 'Winter Stars and lots of Speed',
                eventDescription: 'Study the winter moon while racing down the best sledding hill in the area.',
                eventLocation: {
                    locationName: 'Springfield Bog',
                    phone: 'n/a',
                    addressCity: 'Springfield Township',
                    addressState: 'OH',
                    addressZipCode: '44321',
                    addressLineOne: '1400 Portage Line Rd.'
                },
                eventType: EventType.Family,
                price: 5.00,
                registrationRequired: true,
                dateOfEvent: '02/02/2022'
            };
            break;
        default:
            return {
                eventId: eventKey,
                eventName: eventKey,
                eventDescription: 'This event will amaze and wow you. (Created on the fly.)',
                eventLocation: {
                    locationName: 'Valley River',
                    phone: 'n/a',
                    addressCity: 'Peninsula',
                    addressState: 'OH',
                    addressZipCode: '44264',
                    addressLineOne: '5779 Riverview Rd.'
                },
                eventType: EventType.Family,
                price: 0.0,
                registrationRequired: false,
                dateOfEvent: '01/30/2022'
            };
            break;
    }
}
