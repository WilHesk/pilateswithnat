import Head from 'next/head'
import Hero from '../components/Hero'
import React from 'react';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pilates With Nat | Home</title>
        <meta name="pilates with nat" content="pilates for your body, for everybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        heading="Here's what people say"
        heading2='Testimonials from our community'
        message="'Nat's community classes are friendly and fun. She is always aware of each person's    individual requirements and tailors each exercise accordingly.'"
        message2="'Since attending Nat's Pilates classes, the bursitis in my hips and shoulders has improved enormously.'"
        message3="'Since attending Nat's classes, I have seen a great improvement in my flexibility and    posture.'"

        button='Try a class'
      
      /> 
      <Newsletter />
    </div>
  
  );
}
