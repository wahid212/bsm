import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import loginAnimation from "../animations/login-animation.json";

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<"dayah" | "santri" | "wali">(
    "dayah"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

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
      id: "dayah",
      label: "Admin Dayah",
      icon: "🏫",
      description: "Kelola institusi dan santri",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                BSM
              </span>
            </Link>

            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center space-x-2"
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

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Side - Content */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 translate-y-32" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full transform -translate-x-16 -translate-y-16" />
          </div>

          <div className="relative z-10 flex flex-col justify-center px-12 py-20 text-white">
            {/* Lottie Animation */}
            <div className="w-80 h-80 mx-auto mb-8">
              <Lottie
                animationData={loginAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">
                Selamat Datang di
                <span className="block text-blue-200">
                  Bank Santri Munawwarah
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-md mx-auto">
                Platform digital terintegrasi untuk mengelola seluruh aspek
                boarding school dengan efisien dan transparan.
              </p>

              {/* Features List */}
              <div className="space-y-4 text-left max-w-sm mx-auto">
                {[
                  { icon: "📊", text: "Dashboard analitik real-time" },
                  { icon: "👥", text: "Manajemen santri terpusat" },
                  { icon: "💳", text: "Sistem pembayaran digital" },
                  { icon: "🔐", text: "Keamanan data tingkat enterprise" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-blue-100"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-md w-full space-y-8">
            {/* Mobile Header (visible only on mobile) */}
            <div className="lg:hidden text-center mb-8 pt-16">
              <div className="w-24 h-24 mx-auto mb-6">
                <Lottie
                  animationData={loginAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Portal BSM
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Masuk ke akun Anda
              </p>
            </div>

            {/* Desktop Title */}
            <div className="hidden lg:block text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Portal BSM
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Masuk ke akun Anda
              </p>
            </div>

            {/* Login Card */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Masuk sebagai:
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {userTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        userType === type.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
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
                          <div className="font-medium text-gray-900 dark:text-white">
                            {type.label}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {type.description}
                          </div>
                        </div>
                      </div>
                      {userType === type.id && (
                        <div className="text-blue-500">
                          <svg
                            className="w-5 h-5"
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
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email atau Username
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={`Masukkan email ${
                      userType === "dayah"
                        ? "admin"
                        : userType === "santri"
                        ? "santri"
                        : "wali santri"
                    }`}
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Masukkan password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-700 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Masuk ke Dashboard
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Belum punya akun?{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Hubungi admin dayah
                  </a>
                </p>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Butuh Bantuan?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Jika mengalami kesulitan login, hubungi tim support kami.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Hubungi Support
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
