import type { NextPageWithLayout } from '../lib/models/global-types'
import Head from 'next/head'
import Footer from '../lib/components/footer'
import styles from '../styles/Orienteering.module.css'
import { ReactElement } from 'react';
import Image from 'next/image'


const Orienteering: NextPageWithLayout = () => {

    return (
        <>
            <Head>
                <title>A thinking Sport!</title>
            </Head>
            <main>
                <h2><Image src="/OUSALogoLong.png" alt="O USA Logo" height="60px" width="120px"></Image> Orienteering </h2>

                <div>
                    <p>Orienteering is the sport of navigation—often held in unfamiliar terrain—using a map and compass.</p>
                    <p>It's easy to learn and a fun way to exercise your body and mind as you enjoy the outdoors.</p>
                    <p>It's a sport for everyone and beginners are always welcome.</p>
                </div>
            </main>
        </>
    );
};

Orienteering.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.leftSidebar}>
                    <h3>Explore More</h3>
                    <ul className={styles.noDecoration}>
                        <li>Maps</li>
                        <li>Events</li>
                        <li>Other Gear</li>
                    </ul>
                </div>
                <div className={styles.mainBody}>
                    {page}
                </div> 
            </div>
            <Footer></Footer>
        </>
    )
}

export default Orienteering;