import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCampground } from '@fortawesome/free-solid-svg-icons'

const Backwoods: NextPage = () => {

    return (
        <>
            <Head>
                <title>Backwoods</title>
            </Head>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className="fa-5x">
                        <FontAwesomeIcon icon={faCampground} className={styles.textPrimary} />
                    </span>
                    <a className={styles.serviceHeading}><h4>One with Nature </h4></a>
                    <p className={styles.textMuted}>Ready to unplug? Experience the outdoors, the way they are meant to be.</p>
                </div>
            </div>
            <div>
                <p> Want to get back to the basics?</p>
                <p>Rainfly Adventures offers exclusive sites for those looking for a deeper connection with nature.</p>
                <p>We also offer incredible hiking trails through the mountains!</p>
                <p>For those looking for a high sense of adventure, we offer several options to get that adrenaline flowing, including guided backpacking excursions, mountain climbing, mountain biking, and much more!</p>
            </div>
        </>
    );
};

export default Backwoods;