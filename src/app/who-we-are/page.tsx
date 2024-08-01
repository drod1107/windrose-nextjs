import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhoWeAre() {
  return (
    <div>
      <Navbar />
      <section className="text-center content-section" id="about">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="font-bold text-3xl mb-4">RICHER WATERS AWAIT YOU.</h2>
              <p>We build processes so you can build a business.</p>
              <p>From web development to AI enhancements, systems modernization and employee onboarding development, our team is seasoned in a "very special set of skills".</p>
              <p>We write the plans that make your dreams feel easy. You take the journey of a lifetime.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
