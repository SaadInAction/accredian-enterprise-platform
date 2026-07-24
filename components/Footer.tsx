import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer className="
      bg-gray-950
      text-white
      py-16
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-4
        gap-10
      ">


        {/* BRAND */}

        <div>

          <h2 className="
            text-3xl
            font-bold
            text-blue-400
          ">
            Accredian
          </h2>


          <p className="
            mt-4
            text-gray-300
            leading-relaxed
          ">

            Enterprise learning solutions designed
            to build future-ready professionals.

          </p>


        </div>







        {/* CREDENTIALS */}

        <div>

          <h3 className="
            text-xl
            font-bold
            mb-5
          ">

            Accredian Credentials
            That Matter

          </h3>


          <ul className="
            space-y-3
            text-gray-300
          ">

            <li>✓ Industry Recognised Programs</li>

            <li>✓ Expert Industry Mentors</li>

            <li>✓ Enterprise Training Solutions</li>

            <li>✓ Career Focused Curriculum</li>

          </ul>


        </div>







        {/* COMPANY */}

        <div>

          <h3 className="
            text-xl
            font-bold
            mb-5
          ">

            Company

          </h3>


          <ul className="
            space-y-3
            text-gray-300
          ">

            <li>About</li>

            <li>Blog</li>

            <li>Why Accredian</li>

            <li>Contact Us</li>


          </ul>


        </div>







        {/* SOCIAL MEDIA */}

        <div>


          <h3 className="
            text-xl
            font-bold
            mb-5
          ">

            Follow Us

          </h3>



          <div className="
            flex
            gap-5
          ">


            <a
              href="#"
              className="
              hover:text-blue-400
              transition
              "
            >
              <FaInstagram size={28}/>
            </a>



            <a
              href="#"
              className="
              hover:text-blue-400
              transition
              "
            >
              <FaFacebook size={28}/>
            </a>




            <a
              href="#"
              className="
              hover:text-blue-400
              transition
              "
            >
              <FaTwitter size={28}/>
            </a>




            <a
              href="#"
              className="
              hover:text-blue-400
              transition
              "
            >
              <FaLinkedin size={28}/>
            </a>


          </div>





          <p className="
            mt-6
            text-gray-400
          ">

            Email:
            enterprise@accredian.com

          </p>


        </div>



      </div>







      <div className="
        mt-12
        pt-6
        border-t
        border-gray-700
        text-center
        text-gray-400
      ">

        © {new Date().getFullYear()} Accredian.
        All rights reserved.

      </div>


    </footer>

  );

}