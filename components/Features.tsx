import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Analitik',
      description: 'Pantau performa dan statistik boarding school dengan dashboard yang komprehensif dan mudah dipahami.'
    },
    {
      icon: '👥',
      title: 'Manajemen Santri',
      description: 'Kelola data santri, absensi, nilai, dan progress pembelajaran dengan sistem yang terintegrasi.'
    },
    {
      icon: '💳',
      title: 'Pembayaran Digital',
      description: 'Sistem pembayaran SPP dan biaya lainnya dengan notifikasi otomatis dan riwayat transaksi.'
    },
    {
      icon: '📱',
      title: 'Aplikasi Mobile',
      description: 'Akses semua fitur melalui aplikasi mobile yang user-friendly untuk Android dan iOS.'
    },
    {
      icon: '💬',
      title: 'Komunikasi Real-time',
      description: 'Chat dan notifikasi langsung antara dayah, santri, dan wali santri untuk komunikasi yang efektif.'
    },
    {
      icon: '📚',
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan materi digital, quiz, dan assignment yang interaktif.'
    },
    {
      icon: '🔐',
      title: 'Keamanan Data',
      description: 'Perlindungan data dengan enkripsi tingkat enterprise dan backup otomatis.'
    },
    {
      icon: '📈',
      title: 'Laporan Otomatis',
      description: 'Generate laporan akademik, keuangan, dan operasional secara otomatis dengan berbagai format.'
    }
  ];

  return (
    <section id="fitur" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Bank Santri Munawwarah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola boarding school dalam satu platform yang terintegrasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;