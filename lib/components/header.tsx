/* eslint-disable react/jsx-key */
import * as CreateMenu from '../services/createMenu'

import Image from 'next/image'
import styles from '../../styles/header.module.css'
import Link from "next/link"
import { HeaderProps, MenuItemModel } from '../models/header.props';



function Header(props:HeaderProps) {
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
                    {props.menu.map((item: MenuItemModel) => (
                        <label key={item.name}><Link href={item.link}><a> {item.name}</a></Link></label>
                    ))}                 
                </div>
            </div>
        </div>
    );
}



export default Header;