export default function CourseSegmentation() {


  const segments = [
    {
      title: "Program Specific",
      items:
        "Certificate, Executive, Post Graduate Certificate"
    },
    {
      title: "Industry Specific",
      items:
        "IT, Healthcare, Retail, Finance, Education, Manufacturing"
    },
    {
      title: "Topic Specific",
      items:
        "Machine Learning, Design, Analytics, Cybersecurity, Cloud"
    },
    {
      title: "Level Specific",
      items:
        "Senior Leadership, Mid-Career Professionals, Freshers"
    }
  ];



  const audience = [
    {
      title:"Tech Professionals",
      desc:
      "Enhance expertise, embrace technology, and drive innovation."
    },
    {
      title:"Non-Tech Professionals",
      desc:
      "Adapt digitally and collaborate effectively in technology-driven environments."
    },
    {
      title:"Emerging Professionals",
      desc:
      "Develop powerful skills for rapid career growth."
    },
    {
      title:"Senior Professionals",
      desc:
      "Strengthen leadership abilities and enhance strategic decision making."
    }
  ];



  return (

    <section className="py-24 bg-blue-50">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">



        {/* COURSE SEGMENTATION */}

        <div className="text-center mb-14">


          <h2 className="
          text-5xl
          font-bold
          text-gray-950
          ">

            Tailored Course
            <span className="text-blue-600">
              {" "}Segmentation
            </span>

          </h2>



          <p className="
          mt-4
          text-lg
          text-gray-700
          ">

            Explore custom-fit courses designed to address
            every professional focus.

          </p>


        </div>





        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        ">


        {
          segments.map((item,index)=>(


            <div
            key={index}
            className="
            bg-white
            rounded-2xl
            p-6
            shadow-lg
            border
            hover:-translate-y-2
            transition
            "
            >


              <h3 className="
              text-xl
              font-bold
              text-gray-950
              mb-4
              ">

                {item.title}

              </h3>



              <p className="
              text-gray-700
              leading-relaxed
              ">

                {item.items}

              </p>


            </div>


          ))
        }


        </div>








        {/* WHO SHOULD JOIN */}


        <div className="
        mt-24
        ">


        <h2 className="
        text-5xl
        font-bold
        text-center
        text-gray-950
        ">

          Who Should
          <span className="text-blue-600">
            {" "}Join?
          </span>

        </h2>





        <div className="
        mt-12
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        ">


        {
          audience.map((item,index)=>(


            <div
            key={index}
            className="
            bg-white
            p-6
            rounded-2xl
            shadow-md
            text-center
            hover:shadow-xl
            transition
            "
            >


              <div className="
              w-16
              h-16
              mx-auto
              mb-5
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              text-3xl
              ">

                👤

              </div>



              <h3 className="
              text-xl
              font-bold
              text-gray-950
              ">

                {item.title}

              </h3>



              <p className="
              mt-3
              text-gray-700
              ">

                {item.desc}

              </p>


            </div>


          ))
        }


        </div>


        </div>



      </div>


    </section>

  );
}