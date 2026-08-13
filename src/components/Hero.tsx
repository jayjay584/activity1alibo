function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#DA291C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#FFC72C] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FFC72C] blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="text-4xl font-black text-[#FFC72C] tracking-tighter">
          McDonald's
        </div>
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#" className="hover:text-[#FFC72C] transition-colors">Menu</a>
          <a href="#" className="hover:text-[#FFC72C] transition-colors">Deals</a>
          <a href="#" className="hover:text-[#FFC72C] transition-colors">Locations</a>
          <button className="bg-[#FFC72C] text-[#DA291C] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-colors">
            Order Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 pt-12 lg:pt-0 min-h-[calc(100vh-100px)]">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <span className="w-2 h-2 bg-[#FFC72C] rounded-full animate-pulse" />
            New: Spicy Nuggets are back
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
            i'm <span className="text-[#FFC72C]">lovin'</span><br />
            every bite
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Sink your teeth into our legendary burgers, crispy fries, and refreshing drinks. 
            Made fresh, served fast, loved worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative bg-[#FFC72C] text-[#DA291C] px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
              Order Delivery
              <span className="absolute inset-0 rounded-full border-2 border-[#FFC72C] group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              View Full Menu
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 justify-center lg:justify-start border-t border-white/10 mt-8">
            <div>
              <div className="text-3xl font-black text-[#FFC72C]">39K+</div>
              <div className="text-white/60 text-sm">Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFC72C]">100+</div>
              <div className="text-white/60 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFC72C]">70M+</div>
              <div className="text-white/60 text-sm">Daily Served</div>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0 relative">
          <div className="relative w-[320px] h-[320px] lg:w-[500px] lg:h-[500px]">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#FFC72C]/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[#FFC72C]/10 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Central Circle */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#FFC72C] to-[#ffaa00] flex items-center justify-center shadow-2xl shadow-[#FFC72C]/30">
              {/* Burger Icon */}
              <svg className="w-32 h-32 lg:w-48 lg:h-48 text-[#DA291C]" viewBox="0 0 64 64" fill="currentColor">
                {/* Top bun */}
                <path d="M8 26C8 12 18 4 32 4s24 8 24 22v6H8v-6z" />
                {/* Sesame seeds */}
                <circle cx="20" cy="14" r="1.5" fill="white" opacity="0.9" />
                <circle cx="32" cy="10" r="1.5" fill="white" opacity="0.9" />
                <circle cx="44" cy="14" r="1.5" fill="white" opacity="0.9" />
                <circle cx="26" cy="18" r="1.5" fill="white" opacity="0.9" />
                <circle cx="38" cy="18" r="1.5" fill="white" opacity="0.9" />
                {/* Lettuce layer */}
                <path d="M4 34c6-4 12 2 18 0s12-4 18 0 12 2 18 0 6-4 6 0v4H4v-4z" />
                {/* Patty */}
                <rect x="6" y="40" width="52" height="8" rx="4" />
                {/* Cheese */}
                <path d="M8 48h48v2c0 4-4 6-8 4s-6-2-10 0-6 2-10 0-6-2-10 0-6 2-10 0c-4 2-8 0-8-4v-2z" />
                {/* Bottom bun */}
                <path d="M10 52c0 8 10 12 22 12s22-4 22-12v-2H10v2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;