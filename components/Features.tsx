// components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: '📊',
      title: 'Dashboard Analitik',
      description: 'Pantau performa dan statistik boarding school dengan dashboard yang komprehensif dan mudah dipahami.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: '👥',
      title: 'Manajemen Santri',
      description: 'Kelola data santri, absensi, nilai, dan progress pembelajaran dengan sistem yang terintegrasi.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: '💳',
      title: 'Pembayaran Digital',
      description: 'Sistem pembayaran SPP dan biaya lainnya dengan notifikasi otomatis dan riwayat transaksi.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: '📱',
      title: 'Aplikasi Mobile',
      description: 'Akses semua fitur melalui aplikasi mobile yang user-friendly untuk Android dan iOS.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: '💬',
      title: 'Komunikasi Real-time',
      description: 'Chat dan notifikasi langsung antara dayah, santri, dan wali santri untuk komunikasi yang efektif.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: '📚',
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan materi digital, quiz, dan assignment yang interaktif.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🔐',
      title: 'Keamanan Data',
      description: 'Perlindungan data dengan enkripsi tingkat enterprise dan backup otomatis.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: '📈',
      title: 'Laporan Otomatis',
      description: 'Generate laporan akademik, keuangan, dan operasional secara otomatis dengan berbagai format.',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
    <section id="fitur" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Bank Santri Munawwarah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola boarding school dalam satu platform yang terintegrasi
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;