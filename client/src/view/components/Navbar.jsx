import { useState } from "react";
import { Box, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Products', page: '/home' },
    { name: 'About Us', page: '/about' },
    { name: 'Contact', page: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-2 rounded-lg mr-3 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Box className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Classic Packers
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={link.page}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-orange-500/20 border border-transparent hover:border-orange-500/50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-orange-500/20 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.page}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition duration-200 hover:bg-orange-500/20 border border-transparent hover:border-orange-500/50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}