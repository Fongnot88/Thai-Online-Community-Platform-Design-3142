import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPlay, FiUsers, FiBookOpen, FiTrendingUp } = FiIcons;

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-header text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              เรียนรู้ร่วมกัน
              <br />
              <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
                ในชุมชนออนไลน์
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              เข้าร่วมชุมชนการเรียนรู้ที่ใหญ่ที่สุด พร้อมคอร์สเรียนคุณภาพสูงจากผู้เชี่ยวชาญ
              <br />
              <span className="font-semibold text-green-600">เข้าชุมชนฟรี ไม่เสียค่าใช้จ่าย</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>เริ่มต้นเรียนฟรี</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <SafeIcon icon={FiPlay} className="w-5 h-5" />
              <span>ดูวิดีโอแนะนำ</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-black mr-2" />
                <span className="text-3xl font-bold text-black">50K+</span>
              </div>
              <p className="text-gray-600">สมาชิกในชุมชน</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-black mr-2" />
                <span className="text-3xl font-bold text-black">200+</span>
              </div>
              <p className="text-gray-600">คอร์สเรียนคุณภาพ</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-black mr-2" />
                <span className="text-3xl font-bold text-black">95%</span>
              </div>
              <p className="text-gray-600">ความพึงพอใจ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;