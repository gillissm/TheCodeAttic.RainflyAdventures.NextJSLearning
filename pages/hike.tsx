import type { NextPage } from 'next'
import Head from 'next/head'
import  Link  from "next/link";


const Hike: NextPage = () => {
    
    return (
        <div>
            <Head>
                <title>To the Mountains!</title>
            </Head>
            <main>               
                <div>
                    Long or short, we can guide you on the path!
                </div>
            </main>
            <footer>
            <Link href='/'>
                    <a>Back to Trailhead</a>
                </Link>
            </footer>
        </div>
    );

};

export default Hike;