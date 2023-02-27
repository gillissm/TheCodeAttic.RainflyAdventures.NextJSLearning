import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";

// Import Style Related Assets
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faCloudSun } from '@fortawesome/free-solid-svg-icons'

// Import models and data services required for data loading
import { getCurrentWeather } from '../lib/services/getWeather';
import { getAvailbleBoatRentals } from '../lib/services/rentalDataServices';
import { DailyWeatherModel } from '../lib/models/weather.model';
import { RentalModel, RentalRates } from '../lib/models/rental.model';

// 1. Import types from Next

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// 2. Update the page decleration to infer the prop's type via InferGetServerSidePropsType
const Boat: NextPage = ({ currentWeather, rentals }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <Head>
                <title>Splish, Splash!</title>
            </Head>
            <main>
                <div>
                    Let&apos;s get wet.
                </div>
                <div>
                    <h2>Available Rentals for your location</h2>
                    <div className={styles.grid}>
                        {rentals.map((element: RentalModel) => (
                            <div key={element.rentalName } className={styles.card}>
                                <span className="fa-2x">
                                    <FontAwesomeIcon icon={faShip} className={styles.textPrimary} />
                                    <h4 className={styles.serviceHeading}>{element.rentalName}</h4>
                                </span>
                               
                                <p className={styles.textMuted}>{element.rentalDescription}</p>
                                <h5>Rental Rates</h5>
                                <ul>
                                    {element.rentalPeriods.map((rate: RentalRates, index) => (
                                        <li key={index }>${rate.cost.toLocaleString(undefined, {minimumFractionDigits:2})} per {rate.rentalLength.toString()} {rate.rentalPeriod.toString()}</li>
                                    ))}
                                </ul>                              
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <h2>Make Sure the Weather is Looking Right</h2>
                    <div className={styles.grid}>
                        {currentWeather.map((element: DailyWeatherModel) => (
                            <div key={element.dateStamp} className={styles.card}>
                                <h4 className={styles.serviceHeading}>{element.dateStamp}
                                    <span className="fa-1x">
                                        &nbsp; <FontAwesomeIcon icon={faCloudSun} className={styles.textPrimary} />                                    
                                    </span>
                                </h4>
                                
                                <p className={styles.textMuted}>{element.weatherDescription}</p>
                                <p className={styles.textMuted}>
                                    Daily Low: {element.tempMin}*F<br />
                                    Daily High: {element.tempMax}*F<br />
                                    Wind Will be Blowing: {element.windSpeed}<br/><br/>
                                    Should Feel Like: {element.feelsLike}*F<br />                                    
                                </p>                                                        
                            </div>
                        ))
                        }
                    </div>
                </div>
            </main>
            <footer>
                <Link href='/'>
                    <a>Back to Trailhead</a>
                </Link>
            </footer>
        </div>
    );
};

export default Boat;

// 3. Define the logic for data retrieval
export const getServerSideProps: GetServerSideProps = async (context) => {
    const weatherInfo = await getCurrentWeather('44236');
    const availableRentals = await getAvailbleBoatRentals();

    if (availableRentals !== null && availableRentals.length > 0) {
        // 3a. Return data is a props object whose properties represent the expected data of the page decleration
        return {
            props: {
                currentWeather: weatherInfo,
                rentals: availableRentals
            }
        }
    }
    else {
        // 3b. Return object that performs a redirect to the root page (home), and is marked as temporary
        // -- useful when data is not available for a page at time of request
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }
}