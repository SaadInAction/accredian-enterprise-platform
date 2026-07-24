import {
  FaGraduationCap,
  FaChartLine,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap size={40} />,
    title: "Corporate Upskilling",
    desc: "Customized learning programs for your workforce.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Expert Mentors",
    desc: "Industry experts guiding every learning journey.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Analytics Dashboard",
    desc: "Track employee progress with detailed insights.",
  },
  {
    icon: <FaCertificate size={40} />,
    title: "Certification",
    desc: "Recognized certificates after successful completion.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Accredian
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}