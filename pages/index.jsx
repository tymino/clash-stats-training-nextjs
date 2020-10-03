import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.sass';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clash stats</title>
      </Head>

      <main className={styles.main}>
        <Link href="/player">
          <a>Player info</a>
        </Link>
      </main>
    </div>
  )
}
