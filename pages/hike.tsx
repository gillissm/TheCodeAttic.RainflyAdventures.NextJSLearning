/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { HikeModel } from '../lib/models/hike.model';
import { getHikeRankings } from '../lib/services/getHikeInformation';


const Hike: NextPage = ({ latestHikes }:InferGetStaticPropsType<typeof getStaticProps>) => {
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
                        <tr><th>TRAILNAME</th><th>DISTANCE</th><th>RANKING</th></tr>
                        {latestHikes.map((hike: HikeModel) => (
                            <tr><td>{hike.trailname} </td><td>{hike.distance} </td><td>{hike.ranking}</td></tr>
                        ))}
                    </table>
                </div>
            </main>
            <footer>
          
            </footer>
        </div>
    );
};

export default Hike;

export const getStaticProps: GetStaticProps = async (context) => {
    const hikeData = getHikeRankings();

    if (hikeData !== null && hikeData.length > 0) {
        return {
            props: {
                latestHikes: hikeData
            }
        };
    }

    return {
        notFound: true
    }
}
