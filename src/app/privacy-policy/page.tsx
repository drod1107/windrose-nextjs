import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Windrose & Company',
  description: 'Our commitment to protecting your privacy and personal information at Windrose & Company.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gunmetal py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative rounded-xl shadow-2xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gunmetal bg-opacity-60 backdrop-filter backdrop-blur-md z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-myrtle-green mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-papaya-whip">
              <p>
                At Windrose & Company, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, and business details when you contact us or use our services. We also collect non-personal information such as browser type and IP address for analytics purposes.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@windroseandcompany.com.
              </p>
              <h2 className="text-2xl font-semibold text-myrtle-green mt-6 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
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

export default PrivacyPolicyPage;