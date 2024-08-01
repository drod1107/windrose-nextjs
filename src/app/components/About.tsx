import React from 'react';

const About: React.FC = () => (
  <section className="text-center download-section content-section" id="download" style={{ backgroundImage: "url('/assets/img/downloads-bg.jpg')" }}>
    <div className="container mx-auto">
      <div className="col-lg-8 mx-auto">
        <h1 className="font-bold text-4xl mb-4">THE COMPANY AT WINDROSE</h1>
        <p>With an innate obsession with perfection comes a driving need to improve. We've learned from decades of working for - and with - Fortune 500 powerhouses and mom and pop startups alike. Every step of the way, driven by the need to understand what makes a culture successful.</p>
        <p>We are a collective from backgrounds like social media marketing, sales, executive function, human resources, logistics, information technology and systems engineering.</p>
        <p>With our relationship network, we're able to leverage the skills of some of the finest in the industries of law, finance, advertising, and business to scale systems that let you focus on what you're great at.</p>
        <p>We're deep in the startup ecosystem of St. Louis, Missouri - we have access to systems to help kickstart your adventure in ways that might surprise you.</p>
        <p>In the end, we use our experience, technology, and AI to build people-first systems - because computers are best used for empowering people to "human" better.</p>
        <button className="btn btn-primary btn-lg bg-danger text-warning border-none" type="button">chart your journey</button>
      </div>
    </div>
  </section>
);

export default About;
