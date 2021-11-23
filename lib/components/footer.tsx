import * as CreateMenu from '../services/createMenu'

import Image from 'next/image'
import styles from '../../styles/header.module.css'
import Link from "next/link"



function Footer(props) {

    const classStyle = props.styleName ? props.styleName : 'footerBG';
    //`${styles.footer} ${props.styleName}`
    return (
        <div className={`${styles.footer} ${styles[classStyle]}`}>
            <div className={styles.bottomRow}>
                <Link href='/'>
                        <a>Back to Trailhead</a>
                    </Link>
            </div>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                    <Image src="/RainflyAdventuresLogo1.png" alt="Rainfly Adventures Logo" height='60' width='60'></Image>
                    </a>
                </Link>
            </div>            
        </div>
    );
}



export default Footer;