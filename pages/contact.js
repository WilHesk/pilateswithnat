import Head from 'next/head';
import Page from '../components/Page';
import { Contact } from '../components/Contact';

export default function contact() {
  return (
    <div>
      <Head>
        <title>Pilates with Nat | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div> 
      <Page 
      heading='Join Our Community' 
      heading2="I want you to feel comfortable and welcome." 
      para="It's great if we can get to know each other a little bit before you join our class, so I can have you in my thoughts as I create my class plans. Please subscribe to my mailing list by below and I'll get in touch. I won't send you loads of emails, just information about classes. Thanks, hopefully speak to you soon!" />   
      </div>
      <Contact />
    
    </div>
    
  );
}