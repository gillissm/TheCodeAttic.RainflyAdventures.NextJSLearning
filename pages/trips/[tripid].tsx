import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
// 1. import of the SASS stylesheet
import tripStyle from  '../../styles/singletrip.module.scss'

const TripPage: NextPage = () => {
    // 2. This is a dynamic route page, so must take into account the page key/id as pulled from route object
    const router = useRouter();
    const queryObject = router.query;
    // 3. Retreive the dynamic route key/id for easy referencing
    // -- In a more complete application this would be te point data would be retrieved for a data store such as Sitecore
    const tripName = queryObject.tripid;

    return (
        <>
            <Head>
                <title>{tripName}</title>
            </Head>
            <h3>{tripName}</h3>
            {/* 4. Accessing the description CSS classname */}
            <p className={tripStyle.description}>
                Hit the trail with a group of like-minded adventurers to explore the scenic wonders of <span className={tripStyle.tripName}>{tripName}</span> on this fun-filled 3-day hiking trip
                <br /><br />
                A hiker’s dream destination, <span className={tripStyle.tripName}>{tripName}</span> contains some of the most beautiful and dramatic mountain landscapes.
            </p>
            {/* 5. Accessing the tripName CSS classname, to demonstrate that Sass nesting does function as expected  */}
            <p className={tripStyle.tripName}>
                This adventure will tak place in June, when everything is at its peak.
            </p>
        </>
    );
};

export default TripPage;