'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with 21st.dev style gradients and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
        {/* Geometric Shapes - 21st.dev style */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-10 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl rotate-45 opacity-60 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="absolute top-1/2 right-10 w-24 h-24">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl rotate-12 opacity-60 animate-bounce" style={{ animationDuration: '3s' }}></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40">
          <div className="w-full h-full border-4 border-indigo-400 rounded-full opacity-40 animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
      </div>

      {/* Interactive mouse follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ developers</span>
          </div>
        </div>

        {/* Main heading - 21st.dev style */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none">
          <span className="text-gray-900">Build the</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
            Future
          </span>
          <br />
          <span className="text-gray-900">with AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into reality with cutting-edge AI technology. 
          Build, deploy, and scale intelligent applications faster than ever.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10 flex items-center">
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white">
            <span className="flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Active Users', value: '10K+' },
            { label: 'AI Models', value: '50+' },
            { label: 'API Calls', value: '1M+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-ping hidden lg:block"></div>
      <div className="absolute top-1/2 right-12 w-3 h-3 bg-pink-500 rounded-full opacity-60 animate-ping hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-16 w-5 h-5 bg-cyan-500 rounded-full opacity-60 animate-ping hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
