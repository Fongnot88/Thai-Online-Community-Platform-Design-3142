import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiSearch, FiUser, FiBell } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-md bg-white/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-header font-bold text-xl text-black">Community</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              หน้าแรก
            </Link>
            <Link to="/communities" className="text-gray-700 hover:text-black transition-colors font-medium">
              ชุมชน
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-black transition-colors font-medium">
              คอร์สเรียน
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
              เกี่ยวกับเรา
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="ค้นหาชุมชน..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
              <SafeIcon icon={FiBell} className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <SafeIcon icon={FiUser} className="w-4 h-4" />
              <span>เข้าสู่ระบบ</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
                หน้าแรก
              </Link>
              <Link to="/communities" className="text-gray-700 hover:text-black transition-colors font-medium">
                ชุมชน
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-black transition-colors font-medium">
                คอร์สเรียน
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
                เกี่ยวกับเรา
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;