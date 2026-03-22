import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">K</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">Kdkdkesbot</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
            <Link 
              href="https://t.me/Kdkdkesbot" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Open Bot
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🤖</span>
            <span>AI-Powered App Builder</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Build Web Apps<br />Using Telegram Bot
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Simply describe what you want to build and our AI will create a complete web application for you. No coding required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="https://t.me/Kdkdkesbot" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg"
            >
              Start Building Free
            </Link>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your web app ready in minutes. Just describe your idea.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Easy Edits</h3>
              <p className="text-gray-600 leading-relaxed">
                Make changes anytime. Just tell the bot what to modify.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Preview</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your app with anyone using a live preview link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Four simple steps to your web app</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Bot</h3>
              <p className="text-gray-600 text-sm">Start chat with @Kdkdkesbot on Telegram</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Describe</h3>
              <p className="text-gray-600 text-sm">Tell what app you want to build</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Wait</h3>
              <p className="text-gray-600 text-sm">AI builds your app in 2-5 minutes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Done</h3>
              <p className="text-gray-600 text-sm">Get your live app link</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Simple Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Choose a plan that fits your needs</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Build Pack</h3>
                <p className="text-gray-500 text-sm">For first time users</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹75</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 Build Credit</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4 Edit Credits</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live Preview Link</span>
                </li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block w-full text-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-gray-900 rounded-2xl p-8 relative transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-white text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">6 Coins Pack</h3>
                <p className="text-gray-400 text-sm">Best value for regular users</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹50</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>6 Credits (Build or Edit)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible Usage</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live Preview Link</span>
                </li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block w-full text-center bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold transition-colors"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">12 Coins Pack</h3>
                <p className="text-gray-500 text-sm">For power users</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹100</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>12 Credits (Build or Edit)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Best Value</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live Preview Link</span>
                </li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block w-full text-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build?</h2>
          <p className="text-gray-600 mb-8">Start creating your web app today. It only takes a few minutes.</p>
          <Link 
            href="https://t.me/Kdkdkesbot" 
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg"
          >
            <span>Open Telegram Bot</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">K</span>
                </div>
                <span className="font-semibold text-gray-900 text-lg">Kdkdkesbot</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI-powered app building service on Telegram. Create web applications without coding.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a></li>
                <li><Link href="https://t.me/Kdkdkesbot" className="text-gray-600 hover:text-gray-900">Telegram Bot</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <Link href="https://t.me/Kdkdkesbot" className="text-gray-600 hover:text-gray-900 text-sm">
                @Kdkdkesbot
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 Kdkdkesbot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
