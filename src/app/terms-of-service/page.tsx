import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Windrose & Company',
  description: 'The terms and conditions governing the use of Windrose & Company services and website.',
};

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gunmetal py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative rounded-xl shadow-2xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gunmetal bg-opacity-60 backdrop-filter backdrop-blur-md z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-myrtle-green mb-8">Terms of Service</h1>
            <div className="space-y-6 text-papaya-whip">
              <p>
                Welcome to Windrose & Company. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms of Service and any additional terms and conditions that may apply to specific services or content.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">2. Description of Services</h2>
              <p>
                Windrose & Company provides business consultancy services for startups and solopreneurs, including but not limited to business process architecture, automation, and modernization.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when using our services.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">4. Intellectual Property</h2>
              <p>
                All content and materials available on our website or through our services are the property of Windrose & Company or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">5. Limitation of Liability</h2>
              <p>
                Windrose & Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">6. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law provisions.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting a notice on our website.
              </p>
              <p className="mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;