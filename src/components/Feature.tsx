function Feature() {
  const features = [
    {
      title: "Quality Ingredients",
      description: "100% pure beef patties, freshly cracked eggs, and real dairy cheese in every bite.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Fast Service",
      description: "From order to table in minutes. Speed meets satisfaction with our streamlined kitchen.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Easy Ordering",
      description: "Order ahead on the app, use the kiosk, or drive-thru. Your food, your way, your time.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Sustainability",
      description: "Committed to 100% renewable energy and sustainable packaging by 2025.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#DA291C] font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            Made for <span className="text-[#DA291C]">You</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Decades of flavor, convenience, and care in every meal we serve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#DA291C]/40 hover:shadow-lg hover:shadow-gray-200/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Realistic photo instead of numbered badge */}
              <div className="h-36 w-full overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-[9.5rem] right-5 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#DA291C] transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-[#DA291C] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;