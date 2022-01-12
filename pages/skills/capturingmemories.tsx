import { NextPage } from 'next';
import styles from '../../styles/Home.module.css'

// 1. Import the image-tag extension from Next library
import Image from 'next/image'

// 2. Import a statically known image for use on the page
import mtnVista from '../../public/cta/mtnvista.png'

const CapturingMemories: NextPage = () => {

    return (
        <>
            <h1 className={styles.title}>
                Remember the Experience through Pictures
            </h1>

            <div className='containerColumn'>
                <div className='containerRow'>
                    <div className='centerContainerItem'>
                        <div className={styles.floatText}>
                            <p className='oliveBG'>The Hike to this vantage was my favorite</p>
                            {/* 3. Image component tag, with the assigned src of the statically imported image */}
                            <Image
                                src={mtnVista}
                                alt='Highest point we reached'
                            />
                        </div>
                    </div>
                    <div className='centerContainerItem'>
                        <div className={styles.floatText}>
                            <p className='oliveBG'>The best lunchspot ever.</p>
                            {/* 4. Image component tag, with the assigned src for a 'remote image', in this case from the public directory */}
                            {/* 4a. Height and width must be completed OR layout property set to fill  to avoid CLS and runtime error */}
                            {/* 4b. See how Height and width use curly brace syntax instead of quotes. */}
                            <Image
                                src='/cta/riverValley.png'
                                alt='Overlook of the entire river valley'
                                height={300}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className='centerContainerItem'>
                        <div className={styles.floatText}>
                            <p className='oliveBG'>Little River Falls in the Spring</p>
                            {/* 5. Image component tag, with the assigned src for a 'remote image' outside of the site domain */}
                            {/* 5a. Height and width must be completed OR layout property set to fill  to avoid CLS and runtime error */}
                            {/* 5b. Because is outside of the local site domain, then must whitelist the 'www.nps.gov' domain in next.config.js */}
                            <Image
                                src='https://www.nps.gov/common/uploads/structured_data/3C871122-1DD8-B71B-0BA3CC6A7CFE8F33.jpg'
                                alt='Little River Falls in the Spring'
                                height={518}
                                width={690}
                            />
                        </div>
                    </div>
                </div>
                <div className='containerRow'>
                    <div className='centerContainerItem'>
                        <div className={styles.floatText}>
                            <p className='oliveBG'>View of Pelican Point at Cabrillo</p>
                            {/* 6. Image component tag, with the assigned src for a 'remote image' outside of the site domain */}
                            {/* 6a. Placeholder is set to 'blur', requires a blurDataUrl to be set */}
                            {/* 6b. blurDataUrl is set as a base64-encoded color of  #839762 */}
                            <Image
                                src='https://www.nps.gov/common/uploads/structured_data/3C83C3FC-1DD8-B71B-0B5EECDE9C8C44DE.jpg'
                                alt='View of Pelican Point at Cabrillo'
                                height={405}
                                width={607}
                                placeholder='blur'
                                blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsnp5UDwAFHgH984ap7wAAAABJRU5ErkJggg=='
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CapturingMemories;