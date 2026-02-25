import React from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
              EMBROLY
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">Shop</Link>
            <Link to="/blogs/news" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/shop" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link to="/blogs/news" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
