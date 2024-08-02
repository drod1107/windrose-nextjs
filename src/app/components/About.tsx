import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import CustomButton from './CustomButton';
import { Calendar } from 'lucide-react';


const About: React.FC = () => (
  <section className="text-center download-section content-section px-6" id="download">
    <div className="container mx-auto py-12">
      <div className="col-lg-8 mx-auto center">
        <h1 className="font-bold text-4xl mb-4 bg-slate-900 rounded-lg">THE COMPANY AT WINDROSE</h1>
        <Image
          src="/assets/img/windroselogo.png"
          alt="Windrose & Company Logo"
          width={200} height={200}
          className='mx-auto' />

        <div className='text-lg text-slate-900'>
          <p>With an innate obsession with perfection comes a driving need to improve. We've learned from decades of working for - and with - Fortune 500 powerhouses and mom and pop startups alike. Every step of the way, driven by the need to understand what makes a culture successful.</p>
          <p>We are a collective from backgrounds like social media marketing, sales, executive function, human resources, logistics, information technology and systems engineering.</p>
          <p>With our relationship network, we're able to leverage the skills of some of the finest in the industries of law, finance, advertising, and business to scale systems that let you focus on what you're great at.</p>
          <p>We're deep in the startup ecosystem of St. Louis, Missouri - we have access to systems to help kickstart your adventure in ways that might surprise you.</p>
          <p>In the end, we use our experience, technology, and AI to build people-first systems - because computers are best used for empowering people to "human" better.</p>
        </div>
        
        <Link href="https://calendly.com/windroseandco/initial-consult" target="_blank" rel="noopener noreferrer">
          <CustomButton
            text="Book a discovery call"
            dataHover="Schedule Now"
            buttonStyle="bg-myrtle-green text-papaya-whip hover:bg-myrtle-green-light hover:text-papaya-whip"
          >
            <Calendar className="inline-block mr-2 w-5 h-5" />
          </CustomButton>
        </Link>
      </div>
    </div>
  </section>
);

export default About;

