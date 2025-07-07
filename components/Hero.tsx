import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Sistem Manajemen 
          <span className="text-primary-600 block">Bank Santri Munawwarah</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          BSM adalah platform digital yang menghubungkan dayah, santri, dan wali santri 
          dalam satu ekosistem yang terintegrasi untuk mengelola data dengan efisien.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary text-lg px-8 py-3">
            Mulai Sekarang
          </button>
          <button className="btn-secondary text-lg px-8 py-3">
            Lihat Demo
          </button>
        </div>

        {/* Hero Image/Illustration */}
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl">🏫</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dayah</h3>
                <p className="text-sm text-gray-600">Manajemen institusi</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl">👨‍🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Santri</h3>
                <p className="text-sm text-gray-600">Portal pembelajaran</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Wali Santri</h3>
                <p className="text-sm text-gray-600">Monitoring progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;