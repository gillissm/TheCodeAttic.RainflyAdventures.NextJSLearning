import type { NextPage } from 'next'
import Head from 'next/head'

// 1. Import reference model for hikes as well as the service wrapper to get details
import { HikeModel } from '../lib/models/hike.model';
import { getHikeRankings } from '../lib/services/getHikeInformation';

// 2. Import the Types for type-checking to support GetStaticProps 
import { GetStaticProps, InferGetStaticPropsType } from 'next'

// 3. Define the props using InferGetStaticProps to allow for type-checking
// -- required to remove IDE warnings around type mis-matches
const Hike: NextPage = ({ latestHikes }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head>
                <title>To the Mountains!</title>
            </Head>
            <main>
                <div>
                    Long or short, we can guide you on the path!
                </div>
                <div>
                    <h3>Latest Recommended Hikes</h3>
                    <table>
                        <thead>
                            <tr><th>TRAILNAME</th><th>DISTANCE</th><th>RANKING</th></tr>
                        </thead>
                        <tbody>
                            {latestHikes.map((hike: HikeModel) => (
                                <tr key={hike.trailname}>
                                    <td>{hike.trailname}</td>
                                    <td>{hike.distance}</td>
                                    <td>{hike.ranking}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Hike;

// 4. Define the logic of GetStaticProps, by expoerting this function the logic will run during static-generation
export const getStaticProps: GetStaticProps = async (context) => {
    const hikeData = getHikeRankings();

    if (hikeData !== null && hikeData.length > 0) {
        // 4a. Return type must include a nested 'props' object whose properties match those defined as part of the page decleration
        return {
            props: {
                latestHikes: hikeData
            }
        };
    }

    // 4b. Optional return of notFound property will result in a 404 page being returned instead of the declared page
    // -- useful if the content is coming from another source (headless CMS) and possibly removed.
    return {
        notFound: true
    }
}
