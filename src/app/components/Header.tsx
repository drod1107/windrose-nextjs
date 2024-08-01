import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="masthead bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/introbg.jpg')" }}>
    <div className="intro-body container mx-auto text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="brand-heading font-bold text-6xl mb-4">
            WINDROSE & COMPANY
          </h1>
          <p className="intro-text">Richer seas await - your journey begins here.</p>
          <Link className="btn btn-link btn-circle" role="button" href="#about">
            <i className="fa fa-angle-double-down animated"></i>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
