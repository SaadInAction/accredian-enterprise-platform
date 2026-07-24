import Image from "next/image";

export default function CATFramework() {

  const steps = [
    {
      title: "Concept",
      description:
        "Build strong foundations with industry-relevant concepts and knowledge."
    },
    {
      title: "Application",
      description:
        "Apply learning through real-world projects and business scenarios."
    },
    {
      title: "Tools",
      description:
        "Gain hands-on experience with industry-standard tools and technologies."
    }
  ];


  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">


        {/* LEFT CONTENT */}

        <div>

          <h2 className="
            text-5xl
            font-bold
            text-gray-950
          ">

            CAT Framework:
            <span className="text-blue-600">
              {" "}Our Proven Approach
            </span>

          </h2>


          <p className="
            mt-5
            text-lg
            text-gray-700
          ">

            A structured approach that transforms learning into
            practical skills and business impact.

          </p>



          <div className="mt-8 space-y-5">


            {
              steps.map((step,index)=>(

                <div
                  key={index}
                  className="
                  bg-blue-50
                  p-5
                  rounded-2xl
                  shadow-sm
                  "
                >

                  <h3 className="
                    text-xl
                    font-bold
                    text-gray-950
                  ">

                    {step.title}

                  </h3>


                  <p className="
                    mt-2
                    text-gray-700
                  ">

                    {step.description}

                  </p>


                </div>

              ))
            }


          </div>


        </div>





        {/* RIGHT IMAGE */}

        <div className="flex justify-center">


          <Image

            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"

            alt="Our Solutions"

            width={600}

            height={500}

            className="
              w-[90%]
              sm:w-[70%]
              lg:w-full
              h-auto
              rounded-lg
            "

          />


        </div>



      </div>


    </section>

  );

}