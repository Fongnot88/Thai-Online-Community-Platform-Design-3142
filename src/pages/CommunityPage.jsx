import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiUsers, FiBookOpen, FiStar, FiArrowLeft, FiPlay, FiClock, FiAward } = FiIcons;

const CommunityPage = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const community = {
    id: 1,
    name: 'Web Development',
    description: 'เรียนรู้การพัฒนาเว็บไซต์ตั้งแต่พื้นฐานจนถึงขั้นสูง รวมถึง HTML, CSS, JavaScript, React, Node.js และเทคโนโลยีสมัยใหม่',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    members: 12500,
    courses: 25,
    rating: 4.9,
    category: 'เทคโนโลยี',
    instructor: {
      name: 'อาจารย์สมชาย ใจดี',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      experience: '10+ ปี',
      students: '50,000+'
    }
  };

  const courses = [
    {
      id: 1,
      title: 'HTML & CSS พื้นฐาน',
      description: 'เรียนรู้พื้นฐานการสร้างเว็บไซต์ด้วย HTML และ CSS',
      duration: '4 ชั่วโมง',
      lessons: 12,
      level: 'เริ่มต้น',
      price: 'ฟรี',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'JavaScript สำหรับผู้เริ่มต้น',
      description: 'เรียนรู้ภาษา JavaScript ตั้งแต่พื้นฐานจนถึงขั้นสูง',
      duration: '8 ชั่วโมง',
      lessons: 24,
      level: 'กลาง',
      price: '฿1,990',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'React.js Development',
      description: 'สร้างเว็บแอปพลิเคชันสมัยใหม่ด้วย React.js',
      duration: '12 ชั่วโมง',
      lessons: 36,
      level: 'สูง',
      price: '฿2,990',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${community.image})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              <span>กลับหน้าแรก</span>
            </Link>
            
            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {community.category}
                </span>
              </div>
              
              <h1 className="font-header text-5xl md:text-6xl font-bold mb-6">
                {community.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {community.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUsers} className="w-5 h-5" />
                  <span>{community.members.toLocaleString()} สมาชิก</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiBookOpen} className="w-5 h-5" />
                  <span>{community.courses} คอร์ส</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                  <span>{community.rating} คะแนน</span>
                </div>
              </div>
              
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                เข้าร่วมชุมชนฟรี
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="font-header text-3xl font-bold text-black mb-8">ผู้สอนในชุมชน</h2>
            <div className="flex items-center space-x-6">
              <img
                src={community.instructor.avatar}
                alt={community.instructor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="font-header text-xl font-bold text-black mb-2">
                  {community.instructor.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  ประสบการณ์ {community.instructor.experience} | นักเรียน {community.instructor.students}
                </p>
                <p className="text-gray-600">
                  ผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์ที่มีประสบการณ์ในการสอนและทำงานจริงในอุตสาหกรรม
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-header text-4xl font-bold text-black mb-6">
              คอร์สเรียนในชุมชน
            </h2>
            <p className="text-xl text-gray-600">
              เรียนรู้จากคอร์สคุณภาพสูงที่ออกแบบมาเพื่อพัฒนาทักษะของคุณ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="font-bold text-green-600">{course.price}</span>
                  </div>
                  
                  <h3 className="font-header text-xl font-bold text-black mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiPlay} className="w-4 h-4" />
                      <span>{course.lessons} บทเรียน</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    เริ่มเรียน
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;