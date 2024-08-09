import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="mb-8 bg-myrtle-green-light bg-opacity-60 rounded-lg p-8 max-w-screen-sm">
    <h3 className="text-2xl font-bold text-papaya-whip mb-2">{title}</h3>
    <p className="">{description}</p>
  </div>
);

export default ServiceCard;