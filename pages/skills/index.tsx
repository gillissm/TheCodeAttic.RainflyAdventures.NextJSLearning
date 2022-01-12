import { NextPage } from 'next';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import sunset from '../../public/cta/sunset.png'
import Link from 'next/link';

const Index: NextPage = () => {

    return (
        <>
            <Head>
                <title>Skills for the Adventure</title>
            </Head>
            <h1 className={styles.title}>
                Skills for the Adventure
            </h1>

            <div className='containerColumn'>
                <div className='centerContainerItem'>
                    <div className={styles.floatText}>
                        <Image
                            src={sunset}
                            alt='Sunset with silhouettes'
                        />
                    </div>
                </div>
                <div className='centerContainerItem'>
                    <div className={styles.textPrimary}>
                        To enjoy the time on your adventure as well as the memories made, having the right skills is important.
                        <br /><br />
                        Check out our collection of skill building activities, many free and some paid to make sure you are ready for you next big
                        <br /><br />
                        <span className='largeFont'>Rainfly Adventure!</span>
                    </div>
                </div>
                <div className='centerContainerItem'>
                    <div className='containerRow'>
                        <div className='standardContainerItem'>
                            <div>
                                One of the best ways to relive the memories of an adventure is through images.
                            </div>
                            <div>
                                Check-out the free course on capturing memories in <Link href='/skills/capturingmemories'><a className={`largeFont ${styles.textPrimary}`}>Snapshots to Last a Lifetime</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index;