import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import styles from '../../styles/Home.module.css';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());


const ReviewSettings: NextPage = ({ details }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data, error } = useSWR('/api/getInstructions', fetcher)
    if (error) return <div>Failed to load, {error}</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
            <Head>
                <title>Review How Configuration Works</title>
            </Head>
            <h1>{process.env.NEXT_PUBLIC_WELCOME_MSG}</h1>
            <div className='cardWrapper'>
                <h3>Direct Access in HTML vs Server-Side via API Route</h3>
                <div className='containerRow cardWrapper beigeBG'>
                    <div className={`containerColumn whiteBG ${styles.card}`}>
                        <h4 className={styles.serviceHeading}>Instruction Set via HTML</h4>
                        <span className='smallFont'>(Calling server-side configuration directly)</span>
                        <div>
                            <h5>{process.env.INSTRUCTION_1_TITLE}</h5>
                            <ol>
                                <li>{process.env.INSTRUCTION_1_STEP1}</li>
                                <li>{process.env.INSTRUCTION_1_STEP2}</li>
                            </ol>
                            <div className='standardContainerItem'>{process.env.INSTRUCTION_1_MSG}</div>
                        </div>
                    </div>
                    <div className={`containerColumn whiteBG ${styles.card}`}>
                        <h4 className={styles.serviceHeading}>Instruction Set via API</h4>
                        <div>
                            <h5>{data.title}</h5>
                            <ol>
                                <li>{data.stepOne}</li>
                                <li>{data.stepTwo}</li>
                            </ol>
                            <div className='standardContainerItem'>{data.message}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardWrapper'>
                <h3>Server-Side Retrieval through GetServerSideProps</h3>
                <div className='containerRow cardWrapper beigeBG'>
                    <div className={`containerColumn whiteBG ${styles.card}`}>
                        <h4 className={styles.serviceHeading}>Displaying Values from CURRENT_PROMOTION</h4>
                        <span>{details}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewSettings;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            details: process.env.CURRENT_PROMOTION
        }
    };

}