import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Windrose & Company | Navigate Business Growth',
  description: 'Empowering startups and solopreneurs with expert business consultancy. Navigate to richer waters with Windrose & Company.',
};

const Home: React.FC = () => (
  <>
    <Head>
      <link rel="preload" as="video" href="/assets/img/sailingvesselbackground.mp4" type="video/mp4" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-16">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/assets/img/sailingvesselbackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="relative z-20 max-w-4xl w-full">
        <div className="relative rounded-xl shadow-2xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gunmetal bg-opacity-60 backdrop-filter backdrop-blur-md z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-papaya-whip font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="block mb-4">Richer Waters Await You.</span>
              <br/>
              <span className="block">Navigate Business Growth with</span>
              <span className="block mt-4 mb-10">Windrose & Company</span>
            </h1>
    
            <div className="space-y-6 text-papaya-whip text-xl md:text-2xl font-semibold mt-8 mb-10">
              <p>Empowering startups and solopreneurs</p>
              <p>with expert business consultancy.</p>
              <br/>
              <p>From process architecture to AI enhancements,</p>
              <p>we chart your course to success.</p>
            </div>

            <p className="text-earth-yellow text-2xl md:text-3xl font-bold italic mt-8">
              Your journey begins here.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <Link href="/what-we-do" className="w-full sm:w-auto">
                <button className="bg-myrtle-green text-papaya-whip font-bold w-full sm:w-auto text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-myrtle-green-light">
                  Discover Our Services
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="bg-earth-yellow text-gunmetal font-bold w-full sm:w-auto text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-palatinate hover:text-papaya-whip">
                  Start Your Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;