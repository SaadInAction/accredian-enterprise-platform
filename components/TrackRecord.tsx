export default function TrackRecord() {

  const stats = [
    {
      number: "100+",
      title: "Enterprise Clients",
      description: "Trusted by organisations across industries"
    },
    {
      number: "50,000+",
      title: "Learners Trained",
      description: "Professionals upgraded with industry skills"
    },
    {
      number: "95%",
      title: "Completion Rate",
      description: "Successful learning outcomes"
    },
    {
      number: "100+",
      title: "Industry Mentors",
      description: "Experienced experts guiding learners"
    }
  ];


  return (

    <section className="py-24 bg-blue-50">


      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-14">


          <h2 className="
            text-5xl
            font-bold
            text-gray-950
          ">

            Our <span className="text-blue-600">
              Track Record
            </span>

          </h2>


          <p className="
            mt-4
            text-gray-700
            text-lg
          ">

            Delivering measurable learning impact for enterprises.

          </p>


        </div>




        <div className="
          grid
          md:grid-cols-4
          gap-8
        ">


          {
            stats.map((item,index)=>(

              <div

                key={index}

                className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-lg
                hover:-translate-y-2
                transition
                "

              >


                <h3 className="
                  text-4xl
                  font-bold
                  text-blue-600
                ">

                  {item.number}

                </h3>


                <h4 className="
                  mt-4
                  text-xl
                  font-bold
                  text-gray-950
                ">

                  {item.title}

                </h4>


                <p className="
                  mt-3
                  text-gray-700
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