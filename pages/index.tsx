import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>ARIFUL</title>
      <meta name="description" content="Ariful personal portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h3 className={styles.title}>
        Welcome to <a href="https://ariful.io">Ariful's personal portfolio.</a>
      </h3>
    </main>
  </div>
);

export default Home;
