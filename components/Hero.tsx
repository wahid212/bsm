// components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Sistem Manajemen 
          <motion.span 
            className="text-primary-600 dark:text-primary-400 block"
            variants={itemVariants}
          >
            Bank Santri Munawwarah
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          BSM adalah platform digital yang menghubungkan dayah, santri, dan wali santri 
          dalam satu ekosistem yang terintegrasi untuk mengelola data dengan efisien.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white text-lg px-8 py-3 rounded-lg font-medium transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Mulai Sekarang</span>
            <motion.div
              className="absolute inset-0 bg-primary-700 dark:bg-primary-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-700 hover:text-white dark:hover:text-white text-lg px-8 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Demo
          </motion.button>
        </motion.div>

        {/* Enhanced Hero Cards */}
        <motion.div 
          className="relative mx-auto max-w-5xl"
          variants={itemVariants}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 relative transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 dark:from-primary-900/20 to-transparent rounded-2xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                { emoji: '🏫', title: 'Dayah', desc: 'Manajemen institusi' },
                { emoji: '👨‍🎓', title: 'Santri', desc: 'Portal pembelajaran' },
                { emoji: '👨‍👩‍👧‍👦', title: 'Wali Santri', desc: 'Monitoring progress' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-primary-600 dark:text-primary-400 text-2xl">{item.emoji}</span>
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;