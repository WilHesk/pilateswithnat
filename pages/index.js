import Head from 'next/head'
import Hero from '../components/Hero'
import React from 'react';
import Instagram from './Instagram';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pilates With Nat | Home</title>
        <meta name="pilates with nat" content="pilates for your body, for everybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
      heading='Community Pilates'
      heading2='For Your Body, For Every Body'
      button='Try a class'
      /> 
      <Contact />
    </div>
  
  );
}
