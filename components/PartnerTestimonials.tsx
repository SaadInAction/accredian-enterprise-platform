import Image from "next/image";


export default function PartnerTestimonials() {


  const testimonials = [

    {
      company: "Accenture",
      logo: "/logos/accenture.png",
      message:
        "Accredian helped us build relevant skills through structured learning programs. Their industry-focused approach and practical training methodology helped professionals enhance their capabilities."
    },


    {
      company: "Reliance",
      logo: "/logos/reliance.png",
      message:
        "Accredian's enterprise learning solutions helped our teams develop future-ready skills. Their customized programs and expert guidance created meaningful learning outcomes."
    },


    {
      company: "BharatPe",
      logo: "/logos/bharatpe.png",
      message:
        "The learning experience delivered by Accredian was impactful and aligned with our business requirements. Their practical approach helped employees improve technical and professional skills."
    }

  ];




  return (

    <section
      className="
      py-24
      bg-blue-50
      overflow-hidden
      "
    >


      <div
      className="
      max-w-7xl
      mx-auto
      px-6
      "
      >




        {/* TITLE */}

        <div
        className="
        text-center
        mb-16
        "
        >


          <h2
          className="
          text-5xl
          font-bold
          text-gray-950
          "
          >

            Testimonials From

            <span className="
            text-blue-600
            ">
              {" "}Our Partners
            </span>


          </h2>



          <p
          className="
          mt-5
          text-lg
          text-gray-700
          "
          >

            Trusted by leading organizations for enterprise
            learning and workforce transformation.

          </p>


        </div>








        {/* CARDS */}

        <div
        className="
        grid
        md:grid-cols-3
        gap-10
        "
        >



        {
          testimonials.map((item,index)=>(


            <div

            key={index}

            className="
            bg-white
            rounded-3xl
            p-8
            shadow-xl
            border
            border-gray-100
            hover:-translate-y-4
            hover:shadow-2xl
            transition-all
            duration-500
            "

            >





              {/* FLOATING LOGO */}


              <div

              className="
              h-32
              flex
              items-center
              justify-center
              mb-8
              animate-float
              "

              >


                <Image

                src={item.logo}

                alt={item.company}

                width={260}

                height={120}

                className="
                object-contain
                max-h-28
                drop-shadow-xl
                transition
                duration-500
                hover:scale-125
                "

                />


              </div>








              {/* QUOTE ICON */}

              <div
              className="
              text-blue-600
              text-6xl
              font-bold
              "
              >

                "

              </div>






              {/* MESSAGE */}


              <p
              className="
              text-gray-700
              leading-relaxed
              text-base
              "
              >

                {item.message}

              </p>








              {/* COMPANY */}


              <div
              className="
              mt-8
              pt-5
              border-t
              "
              >


                <h3
                className="
                text-2xl
                font-bold
                text-gray-950
                "
                >

                  {item.company}

                </h3>



                <p
                className="
                text-blue-600
                font-semibold
                mt-1
                "
                >

                  Enterprise Partner

                </p>



              </div>





            </div>


          ))

        }



        </div>





      </div>


    </section>

  );

}