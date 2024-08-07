import React from 'react';
import Head from 'next/head';
import YouTubeEmbed from './YoutubeEmbed';
import CustomButton from './CustomButton';
import { Compass, Anchor } from 'lucide-react';

export const metadata = {
  title: 'Windrose & Company | Navigate Business Growth',
  description: 'Empowering startups and solopreneurs with expert business consultancy. Navigate to richer waters with Windrose & Company.',
};

const Home: React.FC = () => (
  <>
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <YouTubeEmbed videoId="1X6DMEWbc9w" />
      <div className="flex-grow bg-gunmetal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-papaya-whip font-saira font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-shadow-lg">
            Navigate Business Growth with Windrose & Company
          </h1>
          <p className="text-papaya-whip font-hind text-xl md:text-2xl mb-12">
            Empowering startups and solopreneurs with expert business consultancy. From process architecture to AI enhancements, we chart your course to success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CustomButton
              text="Discover Our Services"
              url="/what-we-do"
              buttonStyle="bg-myrtle-green hover:bg-myrtle-green-light"
              className="text-papaya-whip font-saira font-bold text-lg px-8 py-3 rounded-full w-full sm:w-auto transition duration-300 ease-in-out"
            >
              <Compass className="w-6 h-6 mr-2" />
            </CustomButton>
            <CustomButton
              text="Start Your Journey"
              url="/contact"
              buttonStyle="bg-earth-yellow hover:bg-palatinate hover:text-papaya-whip"
              className="text-gunmetal font-saira font-bold text-lg px-8 py-3 rounded-full w-full sm:w-auto transition duration-300 ease-in-out"
            >
              <Anchor className="w-6 h-6 mr-2" />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;