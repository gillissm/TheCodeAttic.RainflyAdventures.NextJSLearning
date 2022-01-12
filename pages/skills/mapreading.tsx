import { NextPage } from 'next';
import styles from '../../styles/Home.module.css'

// 1. Import the image-tag extension from Next library
import Image from 'next/image'

// 2. Import a statically known image for use on the page
import compassWithMap from '../../public/cta/compassWithMap.jpg'

const MapReading: NextPage = () => {

    return (
        <>
            <div className='containerColumn'>
                <div className='centerContainerItem'>
                    <div className={`${styles.floatText} ${styles.containerRelative}`}>
                        <p className='oliveBG'>The Hike to this vantage was my favorite</p>
                        {/* 3. Image component tag, with the assigned src of the statically imported image */}
                        {/* 3a. with a custom layout setting, this will generate a image priority property warning in the console */}
                        {/* 3b. To resolve add the property 'priority'  */}
                        <Image
                            src={compassWithMap}
                            alt='Highest point we reached'
                            layout='fill'
                        />
                    </div>
                </div>
                <div className='centerContainerItem'>
                    <h3>Learning to navigate is an important skill when going into new places.
                        <br/><br />
                        Getting lost is one an adventure we do not want you to experience.
                    </h3>
                </div>
            </div>
        </>
    );
}

export default MapReading;