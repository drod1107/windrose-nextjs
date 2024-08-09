import React from 'react';
import ServiceCard from './Card';
import servicesData from '../ServicesData';

const Services = () => {
  return (
    <div className="py-8 px-4 md:px-12 lg:px-16">
      <h2 className="font-saira text-3xl bg-earth-yellow rounded p-4 max-w-screen-sm justify-center mx-auto font-semibold text-myrtle-green mb-4 text-center">Expert Solutions for Your Business</h2>
      <p className="text-lg text-papaya-whip bg-myrtle-green-light rounded bg-opacity-60 p-8 mb-6 max-w-screen-sm justify-center mx-auto">
        At Windrose & Company, we offer a range of services designed to help you achieve your business goals. From software development to technology consulting, innovation, and virtual assistance, we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;