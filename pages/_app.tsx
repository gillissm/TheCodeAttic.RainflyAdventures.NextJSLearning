// import '../styles/globals.css'
 //import type { AppProps } from 'next/app'
// 

// function MyApp({ Component, pageProps }: AppProps) {
//   // return <Component {...pageProps} />
//   return (
//     <Layout>
//       <Component {...pageProps}/>
//     </Layout>
//   );
// }
// export default MyApp


import type {AppPropsWithLayout, NextPageWithLayout } from '../lib/models/global-types'
import Layout from '../lib/components/layout'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }:  AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout> { page }</Layout>)

  return getLayout(<Component {...pageProps} />)
}