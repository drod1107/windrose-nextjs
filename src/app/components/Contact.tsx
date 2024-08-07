import React from 'react';
import Image from "next/image";
import CustomButton from './CustomButton';
import { Linkedin, Calendar } from 'lucide-react';

export const Contact: React.FC = () => (
  <section className="py-16 bg-gunmetal" id="contact">
    <div className="container mx-auto px-4">
      <div className="bg-gunmetal bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <Image
              src="/assets/img/introbg.jpg"
              alt="Windrose & Company"
              className="opacity-80"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gunmetal via-transparent to-transparent"></div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-myrtle-green font-saira text-shadow">
              READY TO BEGIN YOUR JOURNEY?
            </h2>
            <p className="text-lg mb-8 text-papaya-whip font-hind">
              Schedule a free consultation or reach out on LinkedIn. We'll be happy to help. Stop wasting time with things you hate and get back to the reason you started your business. The rest is our problem now. It's that simple.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <CustomButton
                text="Book an appointment"
                url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ23UWilO1cd2IM1uSQqE1jCSEgHav1XImda-cfXJDH5FW-AuMgyz1xFH27IsAaTBn-4ZOPVsU7F?gv=true"
                buttonStyle="btn"
                newTab={true}
                className="flex items-center justify-center text-gunmetal bg-earth-yellow hover:bg-myrtle-green-light transition duration-300 ease-in-out font-saira font-bold"
              >
                <Calendar className="w-5 h-5 mr-2" />
              </CustomButton>
              <CustomButton
                text="Connect on LinkedIn"
                url="https://www.linkedin.com/in/david-windrose/"
                buttonStyle="btn-secondary"
                newTab={true}
                aria-label="Connect on LinkedIn"
                className="flex items-center justify-center bg-myrtle-green text-papaya-whip hover:bg-myrtle-green-light transition duration-300 ease-in-out font-saira font-bold"
              >
                <Linkedin className="w-5 h-5 mr-2" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;