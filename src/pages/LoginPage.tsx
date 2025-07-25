import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'dayah' | 'santri' | 'wali'>('dayah');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi login logic di sini
  };

  const userTypes = [
    { 
      id: 'dayah', 
      label: 'Admin Dayah', 
      icon: '🏫', 
      description: 'Kelola institusi dan santri'
    },
    // { 
    //   id: 'santri', 
    //   label: 'Santri', 
    //   icon: '👨‍🎓', 
    //   description: 'Akses portal pembelajaran'
    // },
    // { 
    //   id: 'wali', 
    //   label: 'Wali Santri', 
    //   icon: '👨‍👩‍👧‍👦', 
    //   description: 'Monitor progress anak'
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BSM</span>
            </Link>
            
            <Link 
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Portal BSM
              </h2>
              {/* <p className="text-gray-600">
                Pilih tipe pengguna dan masuk ke akun Anda
              </p> */}
            </div>

            {/* User Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Masuk sebagai:
              </label>
              <div className="grid grid-cols-1 gap-3">
                {userTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      userType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={type.id}
                      checked={userType === type.id}
                      onChange={(e) => setUserType(e.target.value as any)}
                      className="sr-only"
                    />
                    <div className="flex items-center flex-1">
                      <span className="text-2xl mr-3">{type.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{type.label}</div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                    </div>
                    {userType === type.id && (
                      <div className="text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email atau Username
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={`Masukkan email ${userType === 'dayah' ? 'admin' : userType === 'santri' ? 'santri' : 'wali santri'}`}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Masukkan password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              {/* <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Ingat saya</span>
                </label>
                
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
                  Lupa password?
                </a>
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Masuk 
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Belum punya akun?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                  Hubungi admin dayah
                </a>
              </p>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="text-center">
              <div className="text-blue-600 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Butuh Bantuan?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Jika mengalami kesulitan login, hubungi tim support kami.
              </p>
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
              >
                Hubungi Support →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;