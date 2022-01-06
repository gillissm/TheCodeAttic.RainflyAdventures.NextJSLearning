import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// 1. Define the page as a function inheriting from NextPage
const Event: NextPage = () => {
    // 2. Retrieve the current routing object.
    const router = useRouter();

    // 3. From the current routing object, get the query parameters
    // --- The query object is a collection of name-value pairs where the name is always the name as found in the query string
    // --- For dynamic routes, the name will be what was used for the pages name surrounded in brackets.
    const queryObject = router.query;

    return (
        <>
            <Head>
                <title>Event Page for </title>
            </Head>
            <div>
                {/* 4. Simple display of the dynamic route value */}
                Name of page from url: {queryObject.eid}
            </div>
        </>
    );
}

// 5. Export the page for rendering.
export default Event;