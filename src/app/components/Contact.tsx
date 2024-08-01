import Link from 'next/link';

const Contact: React.FC = () => (
  <section className="text-center content-section" id="contact">
    <div className="container mx-auto">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="font-bold text-3xl mb-4">READY TO BEGIN YOUR JOURNEY?</h2>
          <p>Schedule a free consultation or reach out on LinkedIn. We are not currently accepting new clients, but we're happy to discuss your project or business and your particular challenges to see if it makes sense to work together in the future.</p>
        </div>
      </div>
    </div>
    <ul className="list-inline banner-social-buttons">
      <li className="list-inline-item">
        <Link href="https://calendly.com/windroseandco/initial-consult" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary btn-lg bg-danger text-warning border-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" className="fa-calendar text-2xl">
              <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"></path>
            </svg>
            <span className="network-name">Booking</span>
          </button>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href="https://www.linkedin.com/in/david-windrose/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary btn-lg bg-danger text-warning border-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-linkedin text-2xl">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
            <span className="network-name">LinkedIn</span>
          </button>
        </Link>
      </li>
    </ul>
  </section>
);