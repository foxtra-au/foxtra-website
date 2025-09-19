'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4 font-sans">
        Send us a Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: First Name + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-2 font-sans">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent font-sans text-sm"
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-2 font-sans">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent font-sans text-sm"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 font-sans">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent font-sans text-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2 font-sans">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-white/70 text-sm">🇦🇺</span>
                <span className="ml-1 text-white/70 text-sm font-sans">+61</span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-16 pr-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent font-sans text-sm"
                placeholder="422 222 444"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2 font-sans">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent resize-vertical font-sans text-sm"
            placeholder="Tell us about your project or question..."
          />
        </div>


        {/* Send Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 transition-colors font-sans text-sm"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
