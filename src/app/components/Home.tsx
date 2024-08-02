// File: src/app/components/Home.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => (
  <div className="relative h-screen overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/assets/img/sailingvesselbackground.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="relative z-20 container mx-auto text-center h-full flex flex-col justify-center">
      <h1 className="text-papaya-whip font-bold text-4xl md:text-6xl mb-4 drop-shadow-lg">
        WINDROSE & COMPANY
      </h1>
      <p className="text-papaya-whip text-xl mb-8 drop-shadow-md">
        Richer seas await - your journey begins here.
      </p>
      <Link href="/what-we-do" className="mx-auto">
        <button className="btn">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

export default Home;