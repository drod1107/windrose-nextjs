"use client";
import Image from "next/image";
export default function WhoWeAre() {
  return (
    <div>
      <section className="text-center content-section bg-slate-900 bg-opacity-20" id="about">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
          <Image
            src="/assets/img/barbe_and_david.png"
            alt="Barbe and David"
            width={400} height={400}
            className='mx-auto my-8 bg-papaya-whip bg-opacity-20 rounded-xl' />
            <div className='m-8'>
          <h2 className="font-bold text-3xl mb-4">RICHER WATERS AWAIT YOU.</h2>
          <p>We build processes so you can build a business.</p>
          <p>From web development to AI enhancements, systems modernization and employee onboarding development, our team is seasoned in a "very special set of skills".</p>
          <p>We write the plans that make your dreams feel easy. You take the journey of a lifetime.</p>
        </div>
        </div>
      </section>
    </div>
  );
}
