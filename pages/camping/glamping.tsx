import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCampground } from '@fortawesome/free-solid-svg-icons'

const Glamping: NextPage = () => {

    return (
        <>
            <Head>
                <title>Glamping</title>
            </Head>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className="fa-5x">
                        <FontAwesomeIcon icon={faCampground} className={styles.textPrimary} />
                    </span>
                    <a className={styles.serviceHeading}><h4>Glamorous Camp</h4></a>
                    <p className={styles.textMuted}>The perfect getaway, for those that want to be in the great outdoors but still enjoy all the comforts of home.</p>
                </div>               
            </div>
            <div>
                <p>Need a sense of adventure, but not looking to rough it?</p>
                <p>Rainfly Adventures provides the best of the great outdoors with the comfort of feeling right at home. Our luxury cabins bring the wilderness right to your doorstep, but rest easy knowing that is where it will stay.</p>
                <p>Each lodging comes fully furnished with all of the best amenities, including Free WiFi. Whether you want to take your office to the forest or just enjoy the scenery with style, we've got you covered!</p>
            </div>
        </>
    );
};

export default Glamping;