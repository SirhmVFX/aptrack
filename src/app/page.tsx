// app/home/page.js
"use client";

import Link from "next/link";
import {
  BookOpen,
  Clock,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: "Timed Examinations",
      description:
        "Take your exams with real-time countdown timers and auto-submit functionality.",
    },
    {
      icon: Award,
      title: "Instant Results",
      description:
        "Get immediate feedback with detailed answer reviews and performance analytics.",
    },
    {
      icon: Target,
      title: "Faculty-Specific Courses",
      description:
        "Customized exam tracks for Frontend, Backend, Mobile, Design, Data Science & more.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is protected with Firebase authentication and secure cloud storage.",
    },
  ];

  const faculties = [
    "Frontend Development",
    "Backend Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Science",
    "Full Stack Development",
  ];

  const stats = [
    { number: "6+", label: "Faculty Tracks" },
    { number: "50+", label: "Practice Exams" },
    { number: "1000+", label: "Questions" },
    { number: "24/7", label: "Access" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className=" p-2 rounded-lg">
              <Image src="/logo.png" alt="ThinkTank" width={50} height={50} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">ThinkTank</h1>
              <p className="text-xs text-gray-600">
                School of Technology & Innovation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="px-6 py-2 text-indigo-600 font-semibold hover:text-indigo-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Modern Learning Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your Skills with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {" "}
                Smart Exams
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take comprehensive examinations, track your progress, and excel in
              your chosen field. Built for Aptech students who want to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/signin"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-indigo-200"
              >
                Login to Account
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-4 border-white flex items-center justify-center text-white font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Join 500+ Students
                </p>
                <p className="text-xs text-gray-600">
                  Already improving their skills
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-bold text-gray-800">Current Exam</h3>
                    <p className="text-sm text-gray-600">
                      JavaScript Programming
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-bold text-indigo-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">18</p>
                    <p className="text-xs text-gray-600">Questions</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">15</p>
                    <p className="text-xs text-gray-600">Correct</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">83%</p>
                    <p className="text-xs text-gray-600">Score</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              🏆 New Record!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold shadow-lg">
              ✓ Passed
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools you need to assess your
            knowledge and track your progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculties Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Select from our comprehensive range of faculty tracks designed for
              modern tech careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle className="w-8 h-8 text-green-300 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">{faculty}</h3>
                <p className="text-indigo-100 text-sm">
                  Comprehensive exams covering all essential topics and skills
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Create Account",
              description:
                "Sign up with your student details and choose your faculty track",
              icon: Users,
            },
            {
              step: "02",
              title: "Take Exams",
              description:
                "Access your personalized exam dashboard and start testing your knowledge",
              icon: BookOpen,
            },
            {
              step: "03",
              title: "Track Progress",
              description:
                "Get instant results and monitor your improvement over time",
              icon: TrendingUp,
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-6xl font-bold text-indigo-100 mb-4">
                  {item.step}
                </div>
                <div className="bg-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-indigo-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Aptech students already improving their skills
            through our smart examination system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-xl"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-700 text-white rounded-xl font-semibold hover:bg-indigo-800 transition border-2 border-white/30"
            >
              Login Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6" />
                <span className="font-bold text-lg">Aptech Exam</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to excel through smart assessment and
                continuous learning.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-white transition">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white transition"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Faculties</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Mobile Development</li>
                <li>Data Science</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>support@aptech.com</li>
                <li>Lagos, Nigeria</li>
                <li>Mon - Fri: 9AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Aptech Examination System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
