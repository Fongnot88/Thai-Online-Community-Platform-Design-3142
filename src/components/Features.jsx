import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiBookOpen, FiMessageCircle, FiAward, FiVideo, FiDownload } = FiIcons;

const features = [
  {
    icon: FiUsers,
    title: 'ชุมชนที่มีชีวิตชีวา',
    description: 'เชื่อมต่อกับผู้เรียนและผู้สอนจากทั่วโลก แลกเปลี่ยนความรู้และประสบการณ์',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: FiBookOpen,
    title: 'คอร์สเรียนคุณภาพสูง',
    description: 'เรียนจากผู้เชี่ยวชาญที่มีประสบการณ์จริง พร้อมเนื้อหาที่ทันสมัย',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: FiMessageCircle,
    title: 'การสนทนาแบบเรียลไทม์',
    description: 'ถามคำถาม แบ่งปันความคิดเห็น และได้รับคำตอบจากชุมชนทันที',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: FiAward,
    title: 'ใบประกาศนียบัตร',
    description: 'รับใบประกาศนียบัตรเมื่อจบคอร์ส เพิ่มมูลค่าให้กับประวัติการทำงาน',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: FiVideo,
    title: 'วิดีโอคุณภาพ HD',
    description: 'เนื้อหาวิดีโอความละเอียดสูง พร้อมเสียงที่ชัดเจน เรียนรู้ได้อย่างมีประสิทธิภาพ',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: FiDownload,
    title: 'เรียนออฟไลน์ได้',
    description: 'ดาวน์โหลดเนื้อหาเพื่อเรียนรู้ได้ทุกที่ทุกเวลา แม้ไม่มีอินเทอร์เน็ต',
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-header text-4xl md:text-5xl font-bold text-black mb-6">
            ทำไมต้องเลือกเรา?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ประสบการณ์การเรียนรู้ที่ครบครันและมีคุณภาพ พร้อมชุมชนที่สนับสนุนการเติบโต
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={feature.icon} className="w-8 h-8" />
                </div>
                <h3 className="font-header text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-black rounded-3xl p-12 text-white">
            <h3 className="font-header text-3xl md:text-4xl font-bold mb-6">
              พร้อมเริ่มต้นการเรียนรู้แล้วหรือยัง?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              เข้าร่วมชุมชนการเรียนรู้ที่ใหญ่ที่สุด และเริ่มต้นเส้นทางสู่ความสำเร็จ
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              เริ่มต้นเรียนฟรีวันนี้
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;