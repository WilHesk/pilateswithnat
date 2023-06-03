import Head from 'next/head'
import Hero from '../components/Hero'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pilates With Nat | Home</title>
        <meta name="pilates with nat" content="pilates for every body" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Community Pilates' heading2='For Every Body'  message="When that voice inside your head is saying 'I can't' our community is here to gently remind you that YOU CAN" button='Try a class'/> 
    </div>
  
  );
}
