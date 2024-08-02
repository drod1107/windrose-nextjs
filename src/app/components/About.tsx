import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import CustomButton from './CustomButton';
import { Calendar } from 'lucide-react';

const About: React.FC = () => (
  <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-16" id="about">
    <div className="absolute inset-0 bg-gunmetal z-0"></div>
    <div className="relative z-10 w-full max-w-4xl">
      <div className="relative rounded-xl shadow-2xl overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gunmetal bg-opacity-60 backdrop-filter backdrop-blur-md z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12">
          <h1 className="font-bold text-4xl md:text-5xl mb-8 text-papaya-whip text-center">About Windrose & Company</h1>
          <Image
            src="/assets/img/windroselogo.png"
            alt="Windrose & Company Logo"
            width={200} height={200}
            className='mx-auto mb-8'
            priority
          />

          <div className='text-lg text-papaya-whip space-y-6'>
            <p>With an innate obsession with perfection comes a driving need to improve. We&apos;ve learned from decades of working for - and with - Fortune 500 powerhouses and mom and pop startups alike. Every step of the way, driven by the need to understand what makes a culture successful.</p>
            <p>We are a collective from diverse backgrounds including <strong>social media marketing, sales, executive function, human resources, logistics, information technology, and systems engineering</strong>.</p>
            <p>Our extensive relationship network allows us to leverage the skills of some of the finest professionals in <strong>law, finance, advertising, and business</strong> to scale systems that let you focus on what you&apos;re great at.</p>
            <p>Deeply rooted in the <strong>startup ecosystem of St. Louis, Missouri</strong>, we have access to systems that can kickstart your adventure in ways that might surprise you.</p>
            <p>Ultimately, we harness our experience, cutting-edge technology, and AI to build <strong>people-first systems</strong> - because we believe computers are best used for empowering people to &quot;human&quot; better.</p>
          </div>
          <div className="mt-10 text-center">
            <Link href="https://calendly.com/windroseandco/initial-consult" target="_blank" rel="noopener noreferrer">
              <CustomButton
                text="Book a Free Discovery Call"
                dataHover="Schedule Now"
                buttonStyle="btn-secondary"
                aria-label="Schedule a free discovery call"
              >
                <Calendar className="inline-block mr-2 w-5 h-5" aria-hidden="true" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;