import { NextPage } from 'next';
import type { ReactElement } from 'react'
import Layout from '../lib/components/layout'
//import NestedLayout from '../lib/components/nested-layout'\
import styles from '../styles/Home.module.css'

const Index: NextPage = () => {
  return (
    /** Your content */
    <>
      <h1 className={styles.title}>
        Rainfly Adventures
      </h1>

      <p className={styles.description}>
        Providing outdoor adventures for those who can not leave behind the comforts of home to those who want to return to the basics
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </>
  );
}

export default Index;

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {/* <NestedLayout>{page}</NestedLayout> */}
//       {page}
//     </Layout>
//   )
// }