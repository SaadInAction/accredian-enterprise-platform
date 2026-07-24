import Image from "next/image";

const clients = [
  { name: "Reliance", image: "/logos/reliance.png" },
  { name: "HCL", image: "/logos/hcl.png" },
  { name: "IBM", image: "/logos/ibm.png" },
  { name: "Accenture", image: "/logos/accenture.png" },
  { name: "BharatPe", image: "/logos/bharatpe.png" },
  { name: "Bayer", image: "/logos/bayer.png" },
];

export default function Clients() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-gray-900">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="text-center text-gray-600 text-xl mt-5 max-w-3xl mx-auto">
          Trusted by leading organizations across industries to deliver
          world-class learning and enterprise transformation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl p-8 flex items-center justify-center border border-blue-100 shadow-lg hover:shadow-blue-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={180}
                height={100}
                className="object-contain h-20 w-auto"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}