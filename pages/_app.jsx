import '../styles/globals.sass';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/Layout';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color='#ce0000'
        startPosition={0.9}
        stopDelayMs={200}
        height={3}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
