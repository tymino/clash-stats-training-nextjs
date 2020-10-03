import Head from 'next/head';
import Navmenu from './NavMenu';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Clash stats</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
      </Head>
      <Navmenu />
      {children}
    </div>
  )
}