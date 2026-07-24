import Image from "next/image";

export default function Hero() {

  return (

    <section
      id="home"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">


        {/* LEFT CONTENT */}

        <div>

          <h1 className="
            text-5xl
            lg:text-6xl
            font-bold
            text-gray-950
            leading-tight
          ">

            Empower Your Team With

            <span className="text-blue-600">
              {" "}Enterprise Learning
            </span>

            Solutions

          </h1>


          <p className="
            mt-6
            text-lg
            text-gray-700
            leading-relaxed
          ">

            Build future-ready teams with customised training,
            industry experts, and flexible learning programs
            designed for your organisation.

          </p>



          <div className="mt-8 flex gap-5">


            <button
              className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              shadow-blue-500/40
              hover:bg-blue-700
              hover:scale-105
              transition-all
              "
            >
              Get Started
            </button>



            <button
              className="
              border
              border-blue-600
              text-blue-600
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-50
              transition
              "
            >
              Explore Programs
            </button>


          </div>


        </div>





        {/* RIGHT IMAGE */}

        <div className="flex justify-center">


          <div className="
            bg-blue-50
            rounded-3xl
            p-8
            shadow-xl
          ">


            <Image

              src="/hero.svg"

              alt="Enterprise Learning"

              width={600}

              height={500}

              className="w-full max-w-lg"

              priority

            />


          </div>


        </div>



      </div>


    </section>

  );

}