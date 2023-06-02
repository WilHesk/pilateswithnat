import Head from 'next/head';
import Hero from '../components/Hero';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Coping UK | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div> 
      <Hero heading='Connect With Our Community' message="Please get in touch if you're thinking about coming to a class and I can talk you through things. I want you to feel comfortable and relaxed on your first visit so it's great if we can get to know each other a little bit first." button='Drop me a Message!'/>     
      </div>
    
    </div>
    
  );
}