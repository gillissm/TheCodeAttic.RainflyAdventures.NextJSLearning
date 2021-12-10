import type { NextPage } from 'next'
import Head from 'next/head'
import  Link  from "next/link";


const Boat: NextPage = () => {
    
    return (
        <div>
            <Head>
                <title>Splish, Splash!</title>
            </Head>
            <main>               
                <div>
                    Let&apos;s get wet.
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

export default Boat;
