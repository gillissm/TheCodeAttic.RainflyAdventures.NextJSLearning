import { NextPage } from 'next';
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import at from '../public/cta/ATTrailmarker.png'
import farm from '../public/cta/farm.png'
import mtnVista from '../public/cta/mtnvista.png'

const Index: NextPage = () => {
  
  return (
    <>
      <h1 className={styles.title}>
        Rainfly Adventures
      </h1>

      <div className='containerRow'>
        <div className='centerContainerItem'>
          <div className={styles.floatText}>
            <p className={`${styles.description} ${styles.textPrimary} ${styles.wheatYellowBG}`}>
              Providing outdoor adventures for those who can not leave behind the comforts of home to those who want to return to the basics
            </p>
            <Image
              src={at}
              alt='AT trailmarker'
            />
          </div>
        </div>
        <div className='centerContainerItem'>
          <div className={styles.floatText}>
            <p className={`${styles.description} ${styles.textPrimary} ${styles.wheatYellowBG}`}>
              Providing outdoor adventures for those who can not leave behind the comforts of home to those who want to return to the basics
            </p>
            <Image
              src={farm}
              alt='Farm in a valley at fall'
            />
          </div>
        </div>
        <div className='centerContainerItem'>
          <div className={styles.floatText}>
            <p className={`${styles.description} ${styles.textPrimary} ${styles.wheatYellowBG}`}>
              Providing outdoor adventures for those who can not leave behind the comforts of home to those who want to return to the basics
            </p>
            <Image
              src={mtnVista}
              alt='Mountain Vista from riverbed'
            />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Index;