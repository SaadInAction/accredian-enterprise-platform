import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Ready to transform your workforce? Let's discuss your learning goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/contact.png"
              alt="Enterprise Learning"
              width={550}
              height={550}
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              priority
            />
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-100">

            <h3 className="text-3xl font-bold mb-2">
              Enquire Now
            </h3>

            <p className="text-gray-500 mb-8">
              Fill in your details and our team will contact you within 24 hours.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}