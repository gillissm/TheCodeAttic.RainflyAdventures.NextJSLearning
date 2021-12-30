import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import { UserProfileContextProvider } from '../context/userProfile.context';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function UserProfileContextLayout({ children }:{   children: React.ReactNode}) {
    const { data, error } = useSWR('/api/navigation', fetcher)

    if (error) return <div>Failed to load, </div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <Header menu={data} WelcomeMessage=''></Header>
            <div className={styles.container}>
            <UserProfileContextProvider>
                    <main className={styles.main}>{children}</main>
            </UserProfileContextProvider>
            </div>
            <Footer styleName=''></Footer>
        </>
    );
}

