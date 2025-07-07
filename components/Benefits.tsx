import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Efisiensi Operasional',
      description: 'Otomatisasi proses administrasi mengurangi beban kerja staff hingga 70% dan meminimalkan kesalahan manual.'
    },
    {
      icon: '💰',
      title: 'Penghematan Biaya',
      description: 'Sistem paperless dan otomatisasi mengurangi biaya operasional hingga 50% dari sistem konvensional.'
    },
    {
      icon: '🎯',
      title: 'Transparansi Penuh',
      description: 'Semua stakeholder dapat mengakses informasi real-time untuk transparansi dan akuntabilitas yang maksimal.'
    },
    {
      icon: '📱',
      title: 'Akses 24/7',
      description: 'Platform dapat diakses kapan saja, di mana saja melalui berbagai perangkat untuk kemudahan maksimal.'
    },
    {
      icon: '🚀',
      title: 'Skalabilitas Tinggi',
      description: 'Sistem dapat mengakomodasi pertumbuhan boarding school dari puluhan hingga ribuan santri.'
    },
    {
      icon: '🛡️',
      title: 'Keamanan Terjamin',
      description: 'Data terlindungi dengan standar keamanan internasional dan compliance yang ketat.'
    }
  ];

  return (
    <section id="manfaat" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manfaat yang Akan Anda Rasakan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformasi digital yang membawa boarding school Anda ke level yang lebih tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:bg-primary-50 rounded-xl p-8 transition-all duration-300 border border-transparent hover:border-primary-200"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary-600 rounded-2xl px-8 py-16 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Siap Untuk Memulai Transformasi Digital?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan dayah-dayah modern yang sudah mempercayai BSM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                Jadwalkan Demo
              </button>
              <button className="bg-primary-700 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors">
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;