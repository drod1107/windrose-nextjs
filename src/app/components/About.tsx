import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { Calendar } from 'lucide-react';
import Head from 'next/head';

const About: React.FC = () => (
  <>
    <Head>
      <title>About Windrose & Company | Expert Business Consultancy</title>
      <meta name="description" content="Discover Windrose & Company's diverse expertise in business consultancy. From startups to Fortune 500 companies, we build people-first systems using cutting-edge technology and AI." />
      <meta name="keywords" content="Windrose & Company, business consultancy, startups, Fortune 500, AI, technology, St. Louis" />
      <link rel="canonical" href="https://www.windroseandcompany.com/about" />
      <meta property="og:title" content="About Windrose & Company | Expert Business Consultancy" />
      <meta property="og:description" content="Windrose & Company builds people-first systems using cutting-edge technology and AI. Discover our diverse expertise in business consultancy." />
      <meta property="og:image" content="https://www.windroseandcompany.com/assets/img/windroselogo.png" />
      <meta property="og:url" content="https://www.windroseandcompany.com/about" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <section className="py-16 bg-gunmetal" id="about">
      <div className="container mx-auto px-4">
        <div className="bg-gunmetal bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 lg:p-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-8 text-papaya-whip text-center">About Windrose & Company</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/assets/img/windroselogo.png"
                  alt="Windrose & Company Logo"
                  width={300} height={300}
                  className='mx-auto rounded-xl shadow-lg'
                  priority
                />
              </div>
              <div className='md:w-2/3 text-lg text-papaya-whip space-y-6'>
                <p>With an innate obsession with perfection comes a driving need to improve. We've learned from decades of working for - and with - Fortune 500 powerhouses and mom and pop startups alike. Every step of the way, driven by the need to understand what makes a culture successful.</p>
                <p>We are a collective from diverse backgrounds including <strong>social media marketing, sales, executive function, human resources, logistics, information technology, and systems engineering</strong>.</p>
                <p>Our extensive relationship network allows us to leverage the skills of some of the finest professionals in <strong>law, finance, advertising, and business</strong> to scale systems that let you focus on what you're great at.</p>
                <p>Deeply rooted in the <strong>startup ecosystem of St. Louis, Missouri</strong>, we have access to systems that can kickstart your adventure in ways that might surprise you.</p>
                <p>Ultimately, we harness our experience, cutting-edge technology, and AI to build <strong>people-first systems</strong> - because we believe computers are best used for empowering people to "human" better.</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <CustomButton
                text="Book an appointment"
                url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ23UWilO1cd2IM1uSQqE1jCSEgHav1XImda-cfXJDH5FW-AuMgyz1xFH27IsAaTBn-4ZOPVsU7F?gv=true"
                buttonStyle="bg-earth-yellow hover:bg-myrtle-green-light"
                newTab={true}
                className="text-gunmetal font-bold text-lg px-8 py-3 rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;