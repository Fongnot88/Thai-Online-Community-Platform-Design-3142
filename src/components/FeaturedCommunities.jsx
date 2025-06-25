import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiBookOpen, FiStar, FiArrowRight } = FiIcons;

const communities = [
  {
    id: 1,
    name: 'Web Development',
    description: 'เรียนรู้การพัฒนาเว็บไซต์ตั้งแต่พื้นฐานจนถึงขั้นสูง',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    members: 12500,
    courses: 25,
    rating: 4.9,
    category: 'เทคโนโลยี',
    isPopular: true
  },
  {
    id: 2,
    name: 'Digital Marketing',
    description: 'กลยุทธ์การตลาดดิจิทัลและการสร้างแบรนด์ออนไลน์',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    members: 8900,
    courses: 18,
    rating: 4.8,
    category: 'การตลาด'
  },
  {
    id: 3,
    name: 'UI/UX Design',
    description: 'ออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อที่สวยงาม',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    members: 6700,
    courses: 22,
    rating: 4.9,
    category: 'ดิไซน์'
  },
  {
    id: 4,
    name: 'Data Science',
    description: 'วิเคราะห์ข้อมูลและการเรียนรู้ของเครื่อง',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    members: 5400,
    courses: 15,
    rating: 4.7,
    category: 'วิทยาศาสตร์'
  },
  {
    id: 5,
    name: 'Business Strategy',
    description: 'กลยุทธ์ธุรกิจและการจัดการองค์กร',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    members: 4200,
    courses: 12,
    rating: 4.6,
    category: 'ธุรกิจ'
  },
  {
    id: 6,
    name: 'Photography',
    description: 'เทคนิคการถ่ายภาพและการแต่งภาพ',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop',
    members: 7800,
    courses: 20,
    rating: 4.8,
    category: 'ศิลปะ'
  }
];

const FeaturedCommunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-header text-4xl md:text-5xl font-bold text-black mb-6">
            ชุมชนยอดนิยม
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เข้าร่วมชุมชนที่มีสมาชิกหลายพันคน และเรียนรู้จากผู้เชี่ยวชาญในแต่ละสาขา
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/community/${community.id}`}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {community.isPopular && (
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        ยอดนิยม
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-gray-700">
                      {community.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-header text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {community.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiUsers} className="w-4 h-4" />
                          <span>{community.members.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                          <span>{community.courses} คอร์ส</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <SafeIcon icon={FiStar} className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{community.rating}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">เข้าร่วมฟรี</span>
                      <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/communities"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <span>ดูชุมชนทั้งหมด</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCommunities;