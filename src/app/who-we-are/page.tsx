import React from 'react';
import Image from "next/image";
import CustomButton from '../components/CustomButton';
import { Calendar } from 'lucide-react';
import Head from 'next/head';

const WhoWeAre: React.FC = () => (
  <>
    <Head>
      <title>About Windrose & Company | Expert Business Consultancy</title>
      <meta name="description" content="Discover Windrose & Company's diverse expertise in business consultancy. From startups to Fortune 500 companies, we build people-first systems using cutting-edge technology and AI." />
    </Head>
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        >
          <source src="/assets/img/sailingvesselbackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gunmetal bg-opacity-50"></div>
        <h1 className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl text-papaya-whip text-center px-4">
          About Windrose & Company
        </h1>
      </div>

      {/* Content Section */}
      <section className="bg-gunmetal py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/assets/img/barbe_and_david.png"
                width={400}
                height={400}
                alt="Barbe and David"
                className='w-full rounded-xl shadow-lg'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div className="md:w-2/3 text-papaya-whip">
              <div className='text-lg space-y-6'>
                <p>With an innate obsession with perfection comes a driving need to improve. We&#39;ve learned from decades of working for - and with - Fortune 500 powerhouses and mom and pop startups alike. Every step of the way, driven by the need to understand what makes a culture successful.</p>
                <p>We are a collective from diverse backgrounds including <strong>social media marketing, sales, executive function, human resources, logistics, information technology, and systems engineering</strong>.</p>
                <p>Our extensive relationship network allows us to leverage the skills of some of the finest professionals in <strong>law, finance, advertising, and business</strong> to scale systems that let you focus on what you&#39;re great at.</p>
                <p>Deeply rooted in the <strong>startup ecosystem of St. Louis, Missouri</strong>, we have access to systems that can kickstart your adventure in ways that might surprise you.</p>
                <p>Ultimately, we harness our experience, cutting-edge technology, and AI to build <strong>people-first systems</strong> - because we believe computers are best used for empowering people to &#34;human&#34; better.</p>
              </div>
              <div className="mt-8">
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
    </div>
  </>
);

export default WhoWeAre;