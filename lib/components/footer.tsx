import * as CreateMenu from '../services/createMenu'

import Image from 'next/image'
import styles from '../../styles/header.module.css'
import Link from "next/link"
import { FooterProps } from '../models/footer.props';



function Footer(props: FooterProps) {

    const classStyle = props.styleName ? props.styleName : 'footerBG';
    //`${styles.footer} ${props.styleName}`
    return (
        <div className={`${styles.footer} ${styles[classStyle]}`}>
            <div className={styles.bottomRow}>
                <Link href='/'>
                    <a>Back to Trailhead</a>
                </Link>
                <div className={`${styles.bottomRow} whiteFont`}>
                    <span className='smallFont'>{process.env.NEXT_PUBLIC_COPYRIGHT}</span>
                </div>
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