import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        // Not on home page, navigate first
        // The hash will be handled after navigation
      } else {
        // Already on home page, scroll to section
        const id = href.slice(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              <img
                src="/dataseva.jpeg"
                alt="dataseva logo"
                className="h-8 w-8 md:h-10 md:w-10 rounded-xl object-cover ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
              dataseva
            </span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:shadow-none"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0F19] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg font-medium text-gray-400 hover:text-white transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
