export default function WhyChooseAccredian() {

  const reasons = [
    {
      title: "Industry Experts",
      description:
        "Learn from experienced mentors and professionals who understand real-world business challenges.",
      icon: "👨‍💼"
    },
    {
      title: "Customized Learning",
      description:
        "Personalized programs designed according to your organization's skill requirements.",
      icon: "🎯"
    },
    {
      title: "Enterprise Training",
      description:
        "Scalable learning solutions built for teams, organizations, and business growth.",
      icon: "🏢"
    },
    {
      title: "Practical Approach",
      description:
        "Hands-on projects, case studies, and real-world applications for better outcomes.",
      icon: "🚀"
    },
    {
      title: "Industry-Aligned Curriculum",
      description:
        "Courses designed with current industry trends, tools, and technologies.",
      icon: "📚"
    },
    {
      title: "Measurable Impact",
      description:
        "Track progress and improve workforce performance through data-driven learning.",
      icon: "📈"
    }
  ];


  return (

    <section
      className="
      py-24
      bg-blue-50
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <div className="
        text-center
        mb-14
        ">


          <h2 className="
          text-5xl
          font-bold
          text-gray-950
          ">

            Why Choose
            <span className="text-blue-600">
              {" "}Accredian?
            </span>

          </h2>


          <p className="
          mt-5
          text-lg
          text-gray-700
          ">

            Empower your workforce with industry-focused learning
            solutions designed for business success.

          </p>


        </div>





        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">


          {
            reasons.map((item,index)=>(

              <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition
              border
              border-gray-100
              "
              >


                <div className="
                text-5xl
                mb-5
                ">

                  {item.icon}

                </div>



                <h3 className="
                text-2xl
                font-bold
                text-gray-950
                ">

                  {item.title}

                </h3>




                <p className="
                mt-4
                text-gray-700
                leading-relaxed
                ">

                  {item.description}

                </p>



              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

}