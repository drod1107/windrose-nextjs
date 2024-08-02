import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { Calendar, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => (
  <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-16" id="contact">
    <div className="absolute inset-0 bg-gunmetal z-0"></div>
    <div className="relative z-10 w-full max-w-4xl">
      <div className="relative rounded-xl shadow-2xl overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gunmetal bg-opacity-60 backdrop-filter backdrop-blur-md z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 text-center">
          <Image src="/assets/img/introbg.jpg" alt="Windrose & Company Logo" width={1200} height={630} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6 sm:text-4xl text-myrtle-green">
            READY TO BEGIN YOUR JOURNEY?
          </h2>
          <p className="text-lg mb-8 text-papaya-whip">
            Schedule a free consultation or reach out on LinkedIn. We&apos;ll be happy to help. Stop wasting time with things you hate and get back to the reason you started your business. The rest is our problem now. It&apos;s that simple.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="https://calendly.com/windroseandco/initial-consult" target="_blank" rel="noopener noreferrer">
              <CustomButton
                text="Book a discovery call"
                dataHover="Schedule Now"
                buttonStyle="btn-secondary"
                aria-label="Schedule a free discovery call"
              >
                <Calendar className="inline-block mr-2 w-5 h-5" aria-hidden="true" />
              </CustomButton>
            </Link>
            <Link href="https://www.linkedin.com/in/david-windrose/" target="_blank" rel="noopener noreferrer">
              <CustomButton
                text="LinkedIn"
                dataHover="Connect"
                buttonStyle="btn-secondary"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="inline-block mr-2 w-5 h-5" aria-hidden="true" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;