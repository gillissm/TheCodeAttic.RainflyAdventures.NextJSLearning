import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getEvent, getListOfActiveEvents } from '../../lib/services/eventsService';

// 1. Define the page as a function inheriting from NextPage
const Event: NextPage = ({ eventDetails }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // 2. Retrieve the current routing object.
    const router = useRouter();
    
    // 3. Check to see if the fallback message is required
    if (router.isFallback) {
        return <div>Setting up camp, please wait...</div>
    }

    // 4. Load the event details
    return (
        <>
            <Head>
                <title>{eventDetails.eventName} happening on {eventDetails.dateOfEvent}</title>
            </Head>
            <div>
                <h3>{eventDetails.eventName}</h3>
                <div>{eventDetails.eventDescription}</div>
                <div>Happening on {eventDetails.dateOfEvent} at {eventDetails.eventLocation.locationName}</div>
            </div>
        </>
    );
}

// 5. Export the page for rendering.
export default Event;

// 6. Export the GetStaticPaths function to allow the defining of key pages for static generation
export const getStaticPaths: GetStaticPaths = async () => {
    // 6a. Retrieve the 10 latest active events from the data source to statically generate
    const pathsFromSource = await getListOfActiveEvents(10);

    // 6b. Map the event keys into the proper params object array
    // -- Reminder, that the params property should be the dynamic route key/name used for the page.
    const paths = pathsFromSource.map((evt) => {
        return { params: { eid: evt } }
    });
    
    return {
        paths,
        fallback: true, //Marking fallback to true to allow for a more fluid user experience
    };
}

// 7. Export the GetStaticProps function to allow for data loading
export const getStaticProps: GetStaticProps = async (context) => {

    // 7a. Retrieve the path query string parameter that is populated from either getStaticPaths or from a URL request
    // -- the 'as { eid: string} & ParsedUrlQuery' is used to avoid TypeScript type checking warnings
    const { eid } = context.params as { eid: string } & ParsedUrlQuery;

    // 7b. Call to retrieve the current event from the data source
    const eventDetails = await getEvent(eid);

    
    // 7c. Check to ensure an event was returned and should be passed up to the page
    if (eventDetails !== null) {
        return {
            props: {
                eventDetails: eventDetails
            },
            revalidate: 300, //Regenerate the page after 5 minutes or 300 seconds, only include this if there is a change for regular content changes to occur
        };
    }

    // 7d. Indicates to Next.js that the page no longer exists, in this scenario because there is no content, so return the 404 page
    return {
        notFound: true
    }
}