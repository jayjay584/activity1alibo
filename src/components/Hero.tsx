function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#DA291C]">
      {/* Background Pattern — softened, single glow instead of two competing ones */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#FFC72C] blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 px-8 lg:px-16 min-h-screen py-24 lg:py-0">
        {/* Text Content */}
        <div className="flex-1 max-w-xl space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-[#FFC72C] rounded-full" />
            New: Spicy Nuggets are back
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.02] tracking-tight">
            i'm <span className="text-[#FFC72C]">lovin'</span>
            <br />
            every bite
          </h1>

          <p className="text-base lg:text-lg text-white/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Sink your teeth into our legendary burgers, crispy fries, and
            refreshing drinks. Made fresh, served fast, loved worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <button className="bg-[#FFC72C] text-[#DA291C] px-7 py-3.5 rounded-full font-bold text-base hover:brightness-105 active:scale-[0.98] transition">
              Order Delivery
            </button>
            <button className="border border-white/25 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white/10 transition">
              View Full Menu
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 justify-center lg:justify-start pt-6 mt-2 border-t border-white/15">
            <div className="pt-6">
              <div className="text-2xl lg:text-3xl font-black text-[#FFC72C]">39K+</div>
              <div className="text-white/55 text-xs mt-0.5">Restaurants</div>
            </div>
            <div className="pt-6">
              <div className="text-2xl lg:text-3xl font-black text-[#FFC72C]">100+</div>
              <div className="text-white/55 text-xs mt-0.5">Countries</div>
            </div>
            <div className="pt-6">
              <div className="text-2xl lg:text-3xl font-black text-[#FFC72C]">70M+</div>
              <div className="text-white/55 text-xs mt-0.5">Daily Served</div>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px]">
            {/* Single quiet ring instead of two competing spins */}
            <div className="absolute -inset-3 rounded-full border border-[#FFC72C]/25" />

            <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl shadow-black/20 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                alt="Juicy cheeseburger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 100L60 92C120 84 240 68 360 60C480 52 600 52 720 56C840 60 960 68 1080 72C1200 76 1320 76 1380 76L1440 76V100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;