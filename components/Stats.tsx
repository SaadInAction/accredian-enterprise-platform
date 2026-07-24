export default function Stats() {
  const stats = [
    { number: "1000+", title: "Enterprise Clients" },
    { number: "10M+", title: "Learners Trained" },
    { number: "95%", title: "Completion Rate" },
    { number: "4.9★", title: "Customer Rating" },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((item) => (
            <div key={item.title}>
              <h2 className="text-5xl font-bold">{item.number}</h2>
              <p className="mt-3 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}