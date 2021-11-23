import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import Header from './header'
import Footer from './footer'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Layout({ children }) {
    const { data, error } = useSWR('/api/navigation', fetcher)

    if (error) return <div>Failed to load, </div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Header menu={data}></Header>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
            <Footer></Footer>
        </>
    );
}

