import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
              <span className="font-header font-bold text-xl">Community</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              แพลตฟอร์มการเรียนรู้ออนไลน์ที่เชื่อมต่อผู้เรียนและผู้สอนจากทั่วโลก
              สร้างชุมชนแห่งการเรียนรู้ที่มีคุณภาพ
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <SafeIcon icon={FiInstagram} className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <SafeIcon icon={FiYoutube} className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-header font-bold text-lg mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">หน้าแรก</Link></li>
              <li><Link to="/communities" className="text-gray-400 hover:text-white transition-colors">ชุมชน</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">คอร์สเรียน</Link></li>
              <li><Link to="/instructors" className="text-gray-400 hover:text-white transition-colors">ผู้สอน</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-header font-bold text-lg mb-4">หมวดหมู่</h3>
            <ul className="space-y-2">
              <li><Link to="/category/technology" className="text-gray-400 hover:text-white transition-colors">เทคโนโลยี</Link></li>
              <li><Link to="/category/business" className="text-gray-400 hover:text-white transition-colors">ธุรกิจ</Link></li>
              <li><Link to="/category/design" className="text-gray-400 hover:text-white transition-colors">ดิไซน์</Link></li>
              <li><Link to="/category/marketing" className="text-gray-400 hover:text-white transition-colors">การตลาด</Link></li>
              <li><Link to="/category/arts" className="text-gray-400 hover:text-white transition-colors">ศิลปะ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-header font-bold text-lg mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">support@community.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+66 2 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  123 ถนนสุขุมวิท<br />
                  กรุงเทพมหานคร 10110
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Community Learning Platform. สงวนลิขสิทธิ์.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                ข้อกำหนดการใช้งาน
              </Link>
              <Link to="/support" className="text-gray-400 hover:text-white text-sm transition-colors">
                ความช่วยเหลือ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;