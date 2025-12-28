"use client"
import { Clock, Users, Bell, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "../../../components/Navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-balance">Skip The Line,</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Save Your Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            CampusOR transforms queue management with virtual queues, real-time tracking, and predictive analytics. Join
            digitally, track your position, and get notified—no more standing in line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Link
              href="/queues"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              Join Queue Now
            </Link>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg active:scale-95">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3">
              85%
            </div>
            <div className="text-gray-600 font-medium">Reduced Wait Time</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-3">
              10K+
            </div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-3">
              50+
            </div>
            <div className="text-gray-600 font-medium">Campus Locations</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Powerful Features</h2>
            <p className="text-xl text-gray-600 text-pretty">Everything you need for seamless queue management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-Time Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your queue position live with instant updates and accurate wait time predictions.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Bell className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Get notified when it's your turn. Never miss your slot with timely alerts.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <TrendingUp className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Predictive Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered wait time predictions help you plan your day better.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Counter Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Efficient coordination across multiple service counters for faster processing.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Role-Based Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure dashboards for students, staff, and administrators with appropriate permissions.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Zap className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Instant Queue Join</h3>
              <p className="text-gray-600 leading-relaxed">
                Join queues digitally from anywhere on campus. No physical presence required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">How It Works</h2>
            <p className="text-xl text-gray-600 text-pretty">Simple, fast, and efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Join Queue</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Select your service and join the queue digitally from your device
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Track Position</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Monitor your position in real-time with accurate wait time estimates
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Get Notified</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Receive notifications when it's your turn and head to the counter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Transform Your Campus Experience?
          </h2>
          <p className="text-xl text-blue-50 mb-10 text-pretty max-w-2xl mx-auto">
            Join thousands of students already saving time with CampusOR
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CampusOR</span>
              </div>
              <p className="text-sm leading-relaxed">Virtual queue management for modern campuses</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2025 CampusOR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
