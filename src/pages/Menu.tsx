import { useState } from "react";

function Menu() {
  const categories = ["Burgers", "Chicken", "Fries & Sides", "Drinks", "Desserts", "Breakfast"];

const wm = (file: string) =>
  `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${encodeURIComponent(file)}&width=600`;

  const menuItems = [
    { id: 1, name: "Big Mac", category: "Burgers", price: 5.99, calories: 550, description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.", image: wm("Big Mac hamburger.jpg") },
    { id: 2, name: "Quarter Pounder", category: "Burgers", price: 6.29, calories: 520, description: "A quarter pound of 100% beef with cheese, onions, pickles, ketchup and mustard.", image: wm("Hamburger sandwich.jpg") },
    { id: 3, name: "Cheeseburger", category: "Burgers", price: 2.49, calories: 300, description: "A simple classic. A juicy beef patty with melty cheese, pickles, onions, ketchup and mustard.", image: wm("Cheeseburger.jpg") },
    { id: 4, name: "McChicken", category: "Chicken", price: 4.39, calories: 400, description: "Crispy chicken patty topped with lettuce and mayo on a toasted bun.", image: wm("ChickFilA-ChickenSandwich.jpg") },
    { id: 5, name: "Chicken McNuggets (10pc)", category: "Chicken", price: 5.99, calories: 420, description: "Tender, juicy chicken nuggets with your choice of dipping sauce.", image: wm("Chicken Nuggets.jpg") },
    { id: 6, name: "Spicy Nuggets (10pc)", category: "Chicken", price: 6.29, calories: 470, description: "Tempura battered nuggets with a spicy kick. Limited time only!", image: wm("Star-shaped chicken nuggets.jpg") },
    { id: 7, name: "World Famous Fries (L)", category: "Fries & Sides", price: 3.99, calories: 490, description: "Golden and crispy on the outside, fluffy on the inside. The perfect side.", image: wm("French Fries.JPG") },
    { id: 8, name: "Apple Slices", category: "Fries & Sides", price: 1.49, calories: 15, description: "Sweet, crisp apple slices. A fresh and healthy side option.", image: wm("Apples.jpg") },
    { id: 9, name: "Coca-Cola (L)", category: "Drinks", price: 2.59, calories: 290, description: "Ice-cold and refreshing. The perfect companion to any meal.", image: wm("Coca-Cola.jpg") },
    { id: 10, name: "McFlurry Oreo", category: "Desserts", price: 4.19, calories: 510, description: "Creamy vanilla soft serve blended with Oreo cookie pieces.", image: wm("Ice Cream.jpg") },
    { id: 11, name: "Hot Fudge Sundae", category: "Desserts", price: 3.39, calories: 330, description: "Creamy vanilla soft serve topped with rich hot fudge.", image: wm("Ice Cream Sundae.jpg") },
    { id: 12, name: "Egg McMuffin", category: "Breakfast", price: 4.19, calories: 310, description: "Toasted English muffin with egg, Canadian bacon, and melted American cheese.", image: wm("Egg and cheese breakfast sandwich.jpg") },
  ];

  const [activeCategory, setActiveCategory] = useState("Burgers");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#DA291C]/10 text-[#DA291C] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
            Fresh &amp; Tasty
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Our <span className="text-[#DA291C]">Menu</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Explore our wide range of delicious options, made with quality ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#DA291C] text-white shadow-lg shadow-[#DA291C]/25 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = wm("Cheeseburger.jpg");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-lg font-black text-[#DA291C] whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {item.calories} cal
                  </span>
                  <button className="bg-[#FFC72C] text-[#DA291C] px-5 py-2 rounded-full font-bold text-sm hover:bg-[#DA291C] hover:text-white transition-colors duration-200">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-gray-400 text-lg">No items found in this category.</p>
          </div>
        )}

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 border-2 border-[#DA291C] text-[#DA291C] px-8 py-3.5 rounded-full font-bold hover:bg-[#DA291C] hover:text-white transition-all duration-200">
            View Full Nutrition Info
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;