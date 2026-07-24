import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import CATFramework from "@/components/CATFramework";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhyChooseAccredian from "@/components/WhyChooseAccredian";
import PartnerTestimonials from "@/components/PartnerTestimonials";
import FAQ from "@/components/FAQ";
import TrainingCTA from "@/components/TrainingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TrackRecord from "@/components/TrackRecord";


export default function Home() {

  return (

    <>

      <Navbar />


      {/* HOME */}

      <section
        id="home"
        className="scroll-mt-24"
      >

        <Hero />

      </section>





      {/* OUR TRACK RECORD */}

      <TrackRecord />







      {/* STATS */}

      <section
        id="stats"
        className="scroll-mt-24"
      >

        <Stats />

      </section>







      {/* CLIENTS */}

      <section
        id="clients"
        className="scroll-mt-24"
      >

        <Clients />

      </section>







      {/* ACCREDIAN EDGE */}

      <section
        id="accredian-edge"
        className="scroll-mt-24"
      >

        <AccredianEdge />

      </section>







      {/* COURSE SEGMENTATION */}

      <section
        id="courses"
        className="scroll-mt-24"
      >

        <CourseSegmentation />

      </section>







      {/* CAT FRAMEWORK */}

      <section
        id="cat-framework"
        className="scroll-mt-24"
      >

        <CATFramework />

      </section>







      {/* WHY CHOOSE ACCREDIAN */}

      <section
        id="why-accredian"
        className="scroll-mt-24"
      >

        <WhyChooseAccredian />

      </section>







      {/* FAQ */}

      <section
        id="faq"
        className="scroll-mt-24"
      >

        <FAQ />

      </section>







      {/* TESTIMONIALS FROM PARTNERS */}

      <section
        id="testimonials"
        className="scroll-mt-24"
      >

        <PartnerTestimonials />

      </section>







      {/* CTA */}

      <section
        id="training-cta"
        className="scroll-mt-24"
      >

        <TrainingCTA />

      </section>







      {/* CONTACT */}

      <section
        id="contact"
        className="scroll-mt-24"
      >

        <Contact />

      </section>







      {/* FOOTER */}

      <Footer />


    </>

  );

}