import Head from 'next/head'
import Testi from '../components/Testi'
import React from 'react';
import Newsletter from '../components/Newsletter';

export default function testimonials() {
  return (
    <div>
      <Head>
        <title>Pilates With Nat | Home</title>
        <meta name="pilates with nat" content="pilates for your body, for everybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Testi
        heading1="Here's what people say"
        heading2='Testimonials from our community'
        message1="'Pilates with Nat is not a chore, it’s a good laugh with like minded individuals who have become friends.'"
        message2="'Nat is just fabulous, her classes have become one of the most important parts of my week.'"
        message3="'Pilates is great for all ages and ability, Nat tailors her classes to work for you and your body.'"
        message4="'We all need time to support our own well-being, I cannot recommend these classes enough.'"
        message5="'Since attending Nat's Pilates classes, the bursitis in my hips and shoulders has improved enormously.'"
        message6="'Since attending Nat's classes, I have seen a great improvement in my flexibility and posture.'"

        button='Try a class'

      />
      <Newsletter />
    </div>

  );
}
