import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import HeroContainer from 'containers/HeroContainer';

const Home: NextPage = () => (
  <>
    <Head>
      <title>ARIFUL</title>
      <meta name="description" content="Ariful personal portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HeroContainer />
    </main>
  </>
);

export default Home;
