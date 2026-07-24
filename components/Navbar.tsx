"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <>

      <header className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        shadow-md
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        ">


          {/* LOGO */}

          <a
            href="#home"
            className="
              text-3xl
              font-bold
              text-blue-600
            "
          >

            Accredian

          </a>







          {/* NAV LINKS */}

          <nav className="
            hidden
            lg:flex
            items-center
            gap-7
          ">



            <a
              href="#home"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Home
            </a>





            <a
              href="#stats"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Stats
            </a>






            <a
              href="#clients"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Clients
            </a>







            <a
              href="#accredian-edge"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Accredian Edge
            </a>








            <a
              href="#cat-framework"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              CAT Framework
            </a>








            <a
              href="#why-accredian"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Why Choose Accredian
            </a>








            <a
              href="#faq"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              FAQ
            </a>








            <a
              href="#testimonials"
              className="
              text-gray-950
              font-semibold
              hover:text-blue-600
              transition
              "
            >
              Testimonials
            </a>





          </nav>









          {/* ENQUIRE BUTTON */}


          <button

            onClick={() => setOpen(true)}

            className="
            bg-blue-600
            text-white
            px-7
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            shadow-blue-500/50
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
            "

          >

            Enquire Now

          </button>



        </div>


      </header>








      {/* CONTACT MODAL */}

      <ContactModal

        open={open}

        setOpen={setOpen}

      />



    </>

  );

}