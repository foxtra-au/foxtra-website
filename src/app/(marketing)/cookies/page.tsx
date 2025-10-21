'use client'

import { useState, useEffect } from 'react'

export default function CookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: false,
    functional: false,
    marketing: false
  })

  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has previously set preferences
    const savedPreferences = localStorage.getItem('foxtra-cookie-preferences')
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences))
    } else {
      setShowBanner(true)
    }
  }, [])

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    const newPreferences = { ...cookiePreferences, [type]: value }
    setCookiePreferences(newPreferences)
    localStorage.setItem('foxtra-cookie-preferences', JSON.stringify(newPreferences))
    
    // Apply cookie settings
    applyCookieSettings(newPreferences)
  }

  const applyCookieSettings = (preferences: typeof cookiePreferences) => {
    // Essential cookies are always enabled
    // Analytics cookies
    if (preferences.analytics) {
      // Enable Google Analytics, etc.
      console.log('Analytics cookies enabled')
    } else {
      // Disable analytics tracking
      console.log('Analytics cookies disabled')
    }

    // Functional cookies
    if (preferences.functional) {
      // Enable preference storage, etc.
      console.log('Functional cookies enabled')
    } else {
      // Clear functional cookies
      console.log('Functional cookies disabled')
    }

    // Marketing cookies
    if (preferences.marketing) {
      // Enable marketing tracking
      console.log('Marketing cookies enabled')
    } else {
      // Disable marketing tracking
      console.log('Marketing cookies disabled')
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    setCookiePreferences(allAccepted)
    localStorage.setItem('foxtra-cookie-preferences', JSON.stringify(allAccepted))
    applyCookieSettings(allAccepted)
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem('foxtra-cookie-preferences', JSON.stringify(cookiePreferences))
    applyCookieSettings(cookiePreferences)
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    setCookiePreferences(onlyEssential)
    localStorage.setItem('foxtra-cookie-preferences', JSON.stringify(onlyEssential))
    applyCookieSettings(onlyEssential)
    setShowBanner(false)
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20 p-6 z-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
                <p className="text-white/80 text-sm">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                  Choose your preferences below.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10 transition"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptSelected}
                  className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10 transition"
                >
                  Accept Selected
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm bg-rose-600 hover:bg-rose-700 rounded-lg transition"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Settings</h1>
          <p className="text-white/60 text-lg">
            Manage your cookie preferences for Foxtra AI services
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-white/80 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie Categories</h2>
            
            {/* Essential Cookies */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-white/80 text-sm">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 text-sm font-medium mr-3">Always Active</span>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                <p className="mb-2"><strong>Purpose:</strong> Website functionality, security, and user authentication</p>
                <p className="mb-2"><strong>Examples:</strong> Session cookies, security tokens, login status</p>
                <p><strong>Retention:</strong> Session-based or up to 1 year</p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-white/80 text-sm">
                    Help us understand how visitors interact with our website to improve performance.
                  </p>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                  </label>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                <p className="mb-2"><strong>Purpose:</strong> Website analytics, performance monitoring, usage statistics</p>
                <p className="mb-2"><strong>Examples:</strong> Google Analytics, page views, user behavior tracking</p>
                <p><strong>Retention:</strong> Up to 2 years</p>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-white/80 text-sm">
                    Remember your preferences and choices to provide personalized experiences.
                  </p>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                  </label>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                <p className="mb-2"><strong>Purpose:</strong> User preferences, language settings, accessibility options</p>
                <p className="mb-2"><strong>Examples:</strong> Theme preferences, language selection, form data</p>
                <p><strong>Retention:</strong> Up to 1 year</p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-white/80 text-sm">
                    Used to deliver relevant advertisements and measure advertising effectiveness.
                  </p>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                  </label>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                <p className="mb-2"><strong>Purpose:</strong> Targeted advertising, campaign tracking, conversion measurement</p>
                <p className="mb-2"><strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting cookies</p>
                <p><strong>Retention:</strong> Up to 2 years</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-white/80 mb-4">
              Some cookies are set by third-party services that appear on our pages:
            </p>
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and login functionality</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
                <li><strong>Content Delivery Networks:</strong> Fast content delivery and caching</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-white/80 mb-4">
              You can control cookies through various methods:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                <p className="text-white/80 text-sm mb-3">
                  Most browsers allow you to control cookies through settings:
                </p>
                <ul className="list-disc pl-4 text-white/70 text-sm space-y-1">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Options → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Manage Cookies</li>
                  <li>Edge: Settings → Site permissions → Cookies</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Our Cookie Settings</h3>
                <p className="text-white/80 text-sm mb-3">
                  Use the toggles above to customize your cookie preferences for our website.
                </p>
                <button
                  onClick={() => setShowBanner(true)}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded-lg text-sm transition"
                >
                  Update Preferences
                </button>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Important Notice</h3>
              <p className="text-white/80 mb-4">
                Disabling certain cookies may affect your experience:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li><strong>Essential Cookies:</strong> Cannot be disabled - required for basic functionality</li>
                <li><strong>Analytics Cookies:</strong> We won't be able to improve our services based on usage data</li>
                <li><strong>Functional Cookies:</strong> Your preferences won't be remembered between visits</li>
                <li><strong>Marketing Cookies:</strong> You may see less relevant advertisements</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-white/5 rounded-lg p-6 mb-4">
              <p className="text-white/80 mb-2">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="text-white/80 mb-2"><strong>Email:</strong> admin@foxtra.ai</p>
              <p className="text-white/80 mb-2"><strong>Phone:</strong> 0422 222 444</p>
              <p className="text-white/80"><strong>Address:</strong> U217 14 Lexington Drive, Bella Vista, NSW 2153</p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/60 text-sm">
              Last updated: December 19, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
