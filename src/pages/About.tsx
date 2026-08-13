function About() {
  return (
    <div id="about" className="min-h-screen bg-[#F9F9F9] font-sans text-[#292929]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://kimi-web-img.kimi.ai/img/c8.alamy.com/59969f5b3d4ba32157e5b4131bb42db00b6a3e8e.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="McDonald's Restaurant"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Our Food, Your Story
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
            From the first sizzle to the last bite, discover what makes
            McDonald's a global favorite.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DA291C] mb-3">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-[#FFC72C] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
            <p>
              It all began in <strong className="text-[#DA291C]">1940</strong>{" "}
              when brothers Dick and Mac McDonald opened a small drive-in
              restaurant in San Bernardino, California. In 1948, they took a
              bold risk — shutting down for three months to reinvent their
              business with the revolutionary <strong>Speedee Service System</strong>,
              featuring a streamlined menu of just nine items including 15-cent
              hamburgers, shakes, and fries.
            </p>
            <p>
              In <strong className="text-[#DA291C]">1954</strong>, a 52-year-old
              milkshake machine salesman named <strong>Ray Kroc</strong> visited
              the restaurant and saw something extraordinary. Captivated by the
              brothers' efficiency and consistency, he became their franchising
              agent and opened the first McDonald's east of the Mississippi in
              Des Plaines, Illinois on April 15, 1955. By 1961, Kroc bought the
              company for $2.7 million and set his sights on something the
              brothers never imagined — a global empire.
            </p>
            <p>
              Today, McDonald's stands as one of the world's most recognized
              brands, with{" "}
              <strong className="text-[#DA291C]">over 36,000 restaurants</strong>{" "}
              serving millions daily across more than 100 countries. From the
              iconic Golden Arches to the unmistakable taste of a Big Mac, we've
              spent over 70 years perfecting the art of serving delicious,
              affordable food that brings people together — one meal at a time.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="https://kimi-web-img.kimi.ai/img/mcdonaldsblog.in/c2592808d9a012523de996dfef084db836b426af.png"
              className="w-full h-auto object-cover"
              alt="Fresh McDonald's Ingredients"
            />
          </div>
        </div>
      </section>

      {/* Signature Items with Real Images */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#DA291C] mb-2">
            Signature Favorites
          </h2>
          <p className="text-gray-600">
            The classics that started it all, still made the same way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Big Mac */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden bg-[#FFF8E1]">
              <img
                src="https://kimi-web-img.kimi.ai/img/www.mashed.com/864614e432fc2d09621fd90f2ca006584734b5c8.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Big Mac"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-[#292929]">Big Mac</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Two all-beef patties, special sauce, lettuce, cheese, pickles,
                onions on a sesame seed bun. Introduced in 1968 by Jim
                Delligatti.
              </p>
            </div>
          </div>
          {/* Fries */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden bg-[#FFF8E1]">
              <img
                src="https://kimi-web-img.kimi.ai/img/s7d1.scene7.com/7bf97546c67dd38c6a9a1892ad655aa4fadf562e"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="French Fries"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-[#292929]">French Fries</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Golden, crispy, and perfectly salted. Made from premium Russet
                Burbank and Shepody potatoes since 1949.
              </p>
            </div>
          </div>
          {/* Nuggets */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden bg-[#FFF8E1]">
              <img
                src="https://kimi-web-img.kimi.ai/img/corporate.mcdonalds.com/4d7ad969b6ae96ce8da57ed7ee668e5c437895bc.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Chicken McNuggets"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-[#292929]">
                Chicken McNuggets
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Tender, juicy 100% white meat chicken in a crispy tempura
                batter. We sell about 700 million pounds every year.
              </p>
            </div>
          </div>
          {/* McFlurry */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden bg-[#FFF8E1]">
              <img
                src="https://kimi-web-img.kimi.ai/img/s7d1.scene7.com/e563138f1a2ebd9e05c34bc3bb25baa3e742442f"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="McFlurry"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-[#292929]">McFlurry</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Creamy vanilla soft-serve blended with your favorite cookie or
                candy pieces. A sweet finish to any meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292929] text-white py-10 px-6 text-center">
        <p className="text-sm opacity-70">
          © 2026 McDonald's. All rights reserved. Food details for demonstration
          purposes.
        </p>
      </footer>
    </div>
  );
}

export default About;