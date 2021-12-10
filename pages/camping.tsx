import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCampground } from '@fortawesome/free-solid-svg-icons'

const Camping: NextPage = () => {
    return (
        <>
            <Head>
                <title>Camping</title>
            </Head>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className="fa-5x">
                        <FontAwesomeIcon icon={faCampground} className={styles.textPrimary} />
                    </span>
                    <Link href="/camping/glamping">
                        <a className={styles.serviceHeading}><h4>Glamorous Camp</h4></a>
                    </Link>
                    <p className={styles.textMuted}>The perfect getaway, for those that 
                        want to be in the great outdoors but still enjoy all the comforts of home.</p>
                </div>
                <div className={styles.card}>
                    <span className="fa-5x">
                        <FontAwesomeIcon icon={faCampground} className={styles.textPrimary} />
                    </span>
                    <a className={styles.serviceHeading}><h4>Family Adventures </h4></a>
                    <p className={styles.textMuted}>An adventure for the whole family.</p>
                </div>
                <div className={styles.card}>
                    <span className="fa-5x">
                        <FontAwesomeIcon icon={faCampground} className={styles.textPrimary} />
                    </span>
                    <a href="/camping/backwoods" className={styles.serviceHeading}><h4>One with Nature </h4></a>
                    <p className={styles.textMuted}>Ready to unplug?
                        Experience the outdoors, the way they are meant to be.</p>
                </div>
            </div>
        </>
    );
};

export default Camping;