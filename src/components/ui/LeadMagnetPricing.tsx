import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Smart lead capture form',
  'SMS verification system',
  'Business auto-fill features',
  'Location auto-detection',
  'Spam protection filters',
  'Instant lead notifications',
  'Custom form fields',
  'Mobile responsive design',
  'Integration with existing websites',
  '24/7 technical support',
]

export default function LeadMagnetPricing() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-sans">
            Simple no-tricks pricing
          </h2>
        </div>
        <div className="mx-auto max-w-2xl rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 ring-1 ring-white/10 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-3xl font-semibold tracking-tight text-white font-sans">Lead Magnet Package</h3>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm/6 font-semibold text-yellow-500 font-sans">What's included</h4>
                <div className="h-px flex-auto bg-white/10" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-white/70 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-white/70 font-sans">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-6 p-6 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
              <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 py-12 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-20 lg:h-full">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-white/70 font-sans">Monthly Subscription</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight text-white font-sans">$50</span>
                    <span className="text-sm/6 font-semibold tracking-wide text-white/70 font-sans">USD/month</span>
                  </p>
                  <p className="mt-2 text-sm text-white/60 font-sans">No setup fees • Cancel anytime</p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-rose-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 font-sans"
                  >
                    Buy now
                  </a>
                  <p className="mt-6 text-xs/5 text-white/60 font-sans">
                    Instant activation. Setup in minutes. Perfect for accounting practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
