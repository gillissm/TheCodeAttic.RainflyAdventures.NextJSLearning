import type { NextPage } from 'next'
import Head from 'next/head'
// Import stylesheet reference for page specific styles
import tripStyle from '../../styles/trips.module.css'


const TripsIndex: NextPage = () => {
    return (
        <>
            <Head>
                <title>Trips Index</title>
                {/* Referencing the stylesheet directly from the public directory, this skips all Next.js optimization */}
                <link href="cssSample.css" rel="stylesheet" />
            </Head>
            <h4>Start Your Trip</h4>
            {/* largeFont is found in /styles/global.css which has been imported in _app.tsx */}
            <p className='largeFont'>
                Sometimes the best way to experience is let someone else do all the planning.
                Checkout are latest planned trips, to help get back to nature.
            </p>
            {/* INCORRECT SYNTAX when trying to reference a module CSS file this is shown for reference
                <p className='tripsComment'></p>
             */}
            {/* Assign the CSS-classname as define in trips.module.css */}
            <p className={tripStyle.tripsComment}>
                &quot;I take a yearly trip with Rainfly Adventures and have yet to be disappointed. They are always well prepared not matter what issue may come&quot;
                <br />
                {/* Assigning CSS both from the module CSS file as well as the globalcss defined in _app.tsx  */}
                <span className={` ${tripStyle.tripsCommentUser} oliveBG`}>
                    Long Time Traveller
                </span>
            </p>
            {/* List the CSS classname as found in the referenced stylesheet */}
            <p className='desertsunBG'>If it is cold where you are then this is the trip for you, experience constant warmth on this trip to the desert.</p>
        </>
    );
};

export default TripsIndex;