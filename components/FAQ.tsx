"use client";

import { useState } from "react";


export default function FAQ() {


  const questions = [

    {
      question: "What is Accredian Enterprise?",
      answer:
        "Accredian Enterprise provides customised learning and training solutions for organisations to improve employee skills."
    },

    {
      question: "How does the training program work?",
      answer:
        "We analyse skill gaps, create customised learning plans, and deliver flexible training programs."
    },

    {
      question: "Do you provide industry mentors?",
      answer:
        "Yes, learners get guidance from experienced industry professionals and subject matter experts."
    },

    {
      question: "Can programs be customised for companies?",
      answer:
        "Yes, our programs are designed according to business goals, team requirements, and industry needs."
    }

  ];



  const [open,setOpen] = useState<number | null>(null);



  return (

    <section className="py-24 bg-white">


      <div className="max-w-5xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">


          <h2 className="
            text-5xl
            font-bold
            text-gray-950
          ">

            Frequently Asked 
            <span className="text-blue-600">
              {" "}Questions
            </span>

          </h2>


          <p className="text-gray-700 mt-4">

            Find answers to common questions about our enterprise learning solutions.

          </p>


        </div>





        {/* FAQ */}

        <div className="space-y-5">


          {
            questions.map((item,index)=>(


              <div

                key={index}

                className="
                border
                border-gray-200
                rounded-xl
                p-5
                shadow-sm
                bg-white
                "

              >


                <button

                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }

                  className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  text-gray-950
                  font-semibold
                  text-lg
                  "

                >

                  {item.question}


                  <span className="text-blue-600 text-2xl">

                    {open === index ? "-" : "+"}

                  </span>


                </button>




                {
                  open === index && (

                    <p className="
                      mt-4
                      text-gray-700
                      leading-relaxed
                    ">

                      {item.answer}

                    </p>

                  )
                }



              </div>


            ))
          }


        </div>



      </div>


    </section>

  );

}