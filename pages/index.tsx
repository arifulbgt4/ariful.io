import type { NextPage } from 'next';
import Head from 'next/head';
import HeroContainer from 'containers/HeroContainer';
import Header from 'containers/Header';
import CloudCanvous from 'components/CloudCanvous';

const Home: NextPage = () => (
  <>
    <Head>
      <title>ARIFUL</title>
      <meta name="description" content="Ariful personal portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header />
      <HeroContainer />
      <CloudCanvous />
    </main>
  </>
);

export default Home;
