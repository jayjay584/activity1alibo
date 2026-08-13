function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-20 py-4 bg-white shadow-sm font-sans">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-9 h-9 bg-red-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    M
                </div>
                <span className="text-xl font-bold text-yellow-900 tracking-tight">MCDONALDS</span>
            </div>

            <ul className="flex gap-8 list-none">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-gray-900 text-[15px] font-medium transition-colors duration-200">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 hover:scale-[1.02] transition-all duration-200">
                Get Started
            </button>
        </nav>
    );
}

export default Navbar;