import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-md fixed-top navbar-light bg-dark bg-opacity-50" id="mainNav">
    <div className="container">
    <Link className="navbar-brand" href="#">
        <Image 
          src="/assets/img/windroselogo.png" 
          width={79} 
          height={76} 
          className="mr-4 w-auto h-10vh" 
          alt="Windrose & Company Logo" 
        />
        Windrose & Company
      </Link>

      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" href="#what-we-do">What we do</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#who-we-are">Who we are</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#contact">Get in touch</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
