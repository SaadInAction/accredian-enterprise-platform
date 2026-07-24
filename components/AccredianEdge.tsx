import Image from "next/image";
import {
  Banknote,
  Users,
  GraduationCap,
  BriefcaseBusiness
} from "lucide-react";


export default function AccredianEdge() {


  const solutions = [
    {
      title: "Fintech Innovation Lab",
      icon: Banknote
    },
    {
      title: "Industry Mentors",
      icon: Users
    },
    {
      title: "Customised Learning",
      icon: GraduationCap
    },
    {
      title: "Enterprise Solutions",
      icon: BriefcaseBusiness
    }
  ];



  return (

    <section
      id="accredian-edge"
      className="py-24 bg-white"
    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Heading */}

        <div className="text-center mb-12">


          <h2 className="
          text-5xl
          font-bold
          text-gray-950
          ">

            <span className="text-blue-600">
              Accredian Edge
            </span>

          </h2>


          <p className="
          mt-4
          text-lg
          text-gray-700
          ">

            Transforming enterprise learning through
            innovation, mentorship and technology.

          </p>


        </div>





        <div className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
        ">




          {/* CARDS */}

          <div className="
          grid
          grid-cols-2
          gap-6
          ">


            {
              solutions.map((item,index)=>{

                const Icon=item.icon;

                return (

                  <div
                  key={index}
                  className="
                  p-6
                  flex
                  flex-col
                  justify-center
                  items-center
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  shadow-lg
                  hover:-translate-y-2
                  transition
                  "
                  >


                    <Icon

                    className="
                    text-blue-600
                    w-12
                    h-12
                    mb-4
                    "

                    />


                    <h3 className="
                    text-lg
                    font-semibold
                    text-center
                    text-gray-900
                    ">

                      {item.title}

                    </h3>


                  </div>

                )

              })
            }


          </div>






          {/* IMAGE */}


          <div className="
          flex
          justify-center
          ">


            <Image

            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"

            alt="Accredian Edge"

            width={600}

            height={500}

            className="
            w-full
            h-auto
            "

            />


          </div>




        </div>


      </div>


    </section>

  );
}