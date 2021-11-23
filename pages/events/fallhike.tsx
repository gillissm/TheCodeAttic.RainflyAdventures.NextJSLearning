import type { NextPageWithLayout } from '../../lib/models/global-types'
import Head from 'next/head'
import Footer from '../../lib/components/footer'
import styles from '../../styles/FallHike.module.css'
import { ReactElement } from 'react';
import Image from 'next/image'
import { NextPage } from 'next';


const FallHike: NextPageWithLayout = () => {

    return (
        <>
            <Head>
                <title>Come watch the leaves fall with us!</title>
            </Head>
            <main>
                <h2 className={styles.beigeBG}><Image src="/hike.svg" alt="Hiking Person" height="60px" width="120px"></Image> Fall Leaf Hike </h2>
                <div className={`${styles.crimsonBG} ${styles.largeFont}`}>
                    Enjoy a colorful hike which concludes with leaf piles for jumping, warm coco, and s'mores.
                    <br />
                    <Image src='/fire.svg' alt='Warm Fire' className={styles.tangerine} height='100px' width='100px'></Image>
                </div>
                <div className={`${styles.oliveBG} ${styles.band}`}></div>
                <div className={`${styles.crimsonBG} ${styles.band}`}></div>
                <div className={`${styles.beigeBG} ${styles.band}`}></div>
                <div className={`${styles.desertsunBG} ${styles.largeFont}`}>
                    <h3>Register before it is to late!</h3>
                    <input type='text' placeholder='First Name' /><br />
                    <input type='text' placeholder='Last Name' /><br />
                    <input type='number' placeholder='Number in Party' /><br />
                    <button>Register Me!</button>
                </div>
                <div className={`${styles.oliveBG} ${styles.band}`}></div>
                <div className={`${styles.crimsonBG} ${styles.band}`}></div>
                <div className={`${styles.beigeBG} ${styles.band}`}></div>
                <div className={`${styles.desertsunBG} ${styles.band}`}></div>
            </main>
        </>
    );
};

FallHike.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <div>
                {page}
            </div>
            <div className={styles.crimsonBG }>
                <Footer styleName="oliveBG"></Footer>
            </div>
        </>
    )
}

export default FallHike;