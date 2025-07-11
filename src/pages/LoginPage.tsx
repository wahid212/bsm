import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<"dayah" | "santri" | "wali">("dayah");
  const [animationData, setAnimationData] = useState(null); // Tambah state untuk animasi
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Load animasi dari public folder
  useEffect(() => {
    fetch('/bsm/animations/login-animation.json') // Sesuaikan dengan base path
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const userTypes = [
    {
      id: "dayah" as const, // Tambah 'as const' untuk type safety
      label: "Admin Dayah",
      icon: "🏫",
      description: "Kelola institusi dan santri",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-2xl"></div>
      </div>

      {/* Header - Fixed position */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-white">BSM</span>
            </Link>

            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors font-medium flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Content */}
            <div className="lg:w-1/2 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 dark:from-primary-600 dark:via-primary-700 dark:to-primary-800 relative overflow-hidden p-8 lg:p-12 flex flex-col justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white rounded-full"></div>
              </div>

              <div className="relative z-10 text-white text-center">
                {/* Lottie Animation */}
                <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto mb-6">
                  <Lottie
                  animationData={animationData}
                    src="/animations/login-animation.json" // Tambah ini
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                {/* Content */}
                <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                  Sistem Informasi Pesantren
                </h1>

                <p className="text-sm lg:text-base text-primary-50 mb-6 leading-relaxed">
                  Aplikasi yang dirancang untuk mempermudah pengelolaan data dan
                  administrasi pesantren.
                </p>

                <div className="space-y-3 text-left max-w-sm mx-auto">
                  <p className="text-sm text-primary-100">
                    Menyediakan kemudahan dalam mengelola data santri, keuangan
                    pesantren, dan informasi penting lainnya dengan cepat, dan
                    transparan.
                  </p>

                  <p className="text-sm text-primary-100">
                    Dengan antarmuka yang intuitif dan fitur yang lengkap, Anda
                    dapat mengakses semua informasi yang dibutuhkan dengan
                    mudah.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                  <button className="px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white font-medium transition-all duration-200 backdrop-blur-sm">
                    Lebih Lanjut
                  </button>
                  <button className="px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white font-medium transition-all duration-200 backdrop-blur-sm">
                    Fitur yang tersedia
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 bg-white dark:bg-secondary-800 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                {/* Logo and Title */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">BSM</span>
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                    Login
                  </h2>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* User Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Masuk sebagai:
                    </label>
                    {userTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          userType === type.id
                            ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                            : "border-secondary-200 dark:border-secondary-600 hover:border-secondary-300 dark:hover:border-secondary-500"
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
                          <span className="text-xl mr-3">{type.icon}</span>
                          <div>
                            <div className="font-medium text-secondary-900 dark:text-white text-sm">
                              {type.label}
                            </div>
                            <div className="text-xs text-secondary-500 dark:text-secondary-400">
                              {type.description}
                            </div>
                          </div>
                        </div>
                        {userType === type.id && (
                          <div className="text-primary-500">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-3 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500"
                        placeholder="masukkan username"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-10 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500"
                        placeholder="masukkan kata sandi"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          className="text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-secondary-600 dark:text-secondary-400">
                      <input
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded mr-2"
                      />
                      Ingatkan saya
                    </label>

                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-500 transition-colors"
                    >
                      Lupa kata sandi?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-700 flex items-center justify-center space-x-2"
                  >
                    <span>Masuk</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center text-sm text-secondary-600 dark:text-secondary-400">
                  <span>Tidak punya akun? </span>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-500 font-medium transition-colors"
                  >
                    Daftar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
