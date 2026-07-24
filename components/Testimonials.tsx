import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Reliance Industries",
    review:
      "Accredian helped our employees gain industry-ready skills through a structured learning experience.",
  },
  {
    name: "Priya Verma",
    company: "Accenture",
    review:
      "The learning platform is intuitive, engaging, and perfect for large enterprise teams.",
  },
  {
    name: "Ankit Mehta",
    company: "IBM",
    review:
      "Excellent mentorship, certification, and measurable learning outcomes for our workforce.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Trusted by leading enterprises across industries.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-blue-600">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}