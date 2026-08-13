function Feature() {
  const features = [
    {
      title: "Quality Ingredients",
      description: "100% pure beef patties, freshly cracked eggs, and real dairy cheese in every bite."
    },
    {
      title: "Fast Service",
      description: "From order to table in minutes. Speed meets satisfaction with our streamlined kitchen."
    },
    {
      title: "Easy Ordering",
      description: "Order ahead on the app, use the kiosk, or drive-thru. Your food, your way, your time."
    },
    {
      title: "Sustainability",
      description: "Committed to 100% renewable energy and sustainable packaging by 2025."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#DA291C] font-bold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Made for <span className="text-[#FFC72C]">You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Decades of flavor, convenience, and care in every meal we serve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-[#DA291C] transition-all duration-300 cursor-pointer"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 bg-[#FFC72C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <span className="text-[#DA291C] font-black text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-[#FFC72C] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-4 h-4 text-[#DA291C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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