import * as CreateMenu from '../services/createMenu'

import Image from 'next/image'
import styles from '../../styles/header.module.css'
import Link from "next/link"



function Header(props) {
    return (
        <div className={ styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                    <Image src="/RainflyAdventuresLogo1.png" alt="Rainfly Adventures Logo" height='45' width='60'></Image>
                    </a>
                </Link>
            </div>
            <div className={styles.controls}>
                <div className={styles.topRow}>
                    <label>{props.WelcomeMessage}</label>
                </div>
                <div className={styles.bottomRow}>
                    <label><Link href={props.menu[0].link}><a> {props.menu[0].name}</a></Link></label>
                    <label><Link href={props.menu[1].link}><a> {props.menu[1].name}</a></Link></label>
                    <label><Link href={props.menu[2].link}><a> { props.menu[2].name}</a></Link></label>
                    <label><Link href={props.menu[3].link}><a> { props.menu[3].name}</a></Link></label>
                </div>
            </div>
        </div>
    );
}



export default Header;