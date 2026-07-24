"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";


export default function TrainingCTA() {

  const [open, setOpen] = useState(false);


  return (

    <section
      className="
      py-24
      bg-blue-600
      "
    >

      <div className="
      max-w-5xl
      mx-auto
      px-6
      text-center
      ">


        <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        text-white
        ">

          Want to Learn More About
          <br />
          Our Training Solutions?

        </h2>



        <p className="
        mt-5
        text-xl
        text-blue-100
        ">

          Get Expert Guidance for Your Team’s Success!

        </p>





        <button

          onClick={()=>setOpen(true)}

          className="
          mt-8
          bg-white
          text-blue-600
          px-10
          py-4
          rounded-xl
          font-bold
          text-lg
          shadow-lg
          hover:scale-105
          transition
          "

        >

          Contact Us

        </button>



      </div>





      <ContactModal

        open={open}

        setOpen={setOpen}

      />


    </section>

  );

}