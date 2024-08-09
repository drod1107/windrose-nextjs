import React from 'react';
import Image from "next/image";
import CustomButton from '../components/CustomButton';
import { Calendar } from 'lucide-react';
import Head from 'next/head';
import About from '../components/About';

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
          The People @ Windrose
        </h1>
      </div>

      {/* Content Section */}
      <section className="bg-gunmetal py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="inline-block md:w-1/3">
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
                <About/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default WhoWeAre;