import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { Calendar, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => (
  <section className="bg-gunmetal text-papaya-whip py-16 px-4 sm:px-6 lg:px-8" id="contact">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 sm:text-4xl text-myrtle-green">
        READY TO BEGIN YOUR JOURNEY?
      </h2>
      <p className="text-lg mb-8">
        Schedule a free consultation or reach out on LinkedIn. We'll be happy to help. Stop wasting time with things you hate and get back to the reason you started your business. The rest is our problem now. It's that simple.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="https://calendly.com/windroseandco/initial-consult" target="_blank" rel="noopener noreferrer">
          <CustomButton
            text="Book a discovery call"
            dataHover="Schedule Now"
            buttonStyle="bg-myrtle-green text-papaya-whip hover:bg-myrtle-green-light hover:text-papaya-whip"
          >
            <Calendar className="inline-block mr-2 w-5 h-5" />
          </CustomButton>
        </Link>
        <Link href="https://www.linkedin.com/in/david-windrose/" target="_blank" rel="noopener noreferrer">
          <CustomButton
            text="LinkedIn"
            dataHover="Connect"
            newTab
            buttonStyle="bg-myrtle-green text-papaya-whip hover:bg-myrtle-green-light hover:text-papaya-whip"
          >
            <Linkedin className="inline-block mr-2 w-5 h-5" />
          </CustomButton>
        </Link>
      </div>
    </div>
  </section>
);

export default Contact;