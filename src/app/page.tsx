import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-xl">Kdkdkesbot</span>
          </div>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            Open Bot
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Web Apps with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Describe your idea and get a complete web application. No coding required.
          </p>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800"
          >
            Start Building →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Building</h3>
              <p className="text-gray-600">Get your app ready in 2-5 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4">✏️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Editing</h3>
              <p className="text-gray-600">Make changes anytime you want</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Links</h3>
              <p className="text-gray-600">Share your app with anyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-1">Open Bot</h3>
              <p className="text-gray-600 text-sm">Start @Kdkdkesbot</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-1">Describe</h3>
              <p className="text-gray-600 text-sm">Tell your idea</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-1">Wait</h3>
              <p className="text-gray-600 text-sm">AI builds it</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-1">Done</h3>
              <p className="text-gray-600 text-sm">Get live link</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Pricing</h2>
          <p className="text-center text-gray-600 mb-12">Simple and transparent pricing</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Build Pack</h3>
              <p className="text-gray-500 text-sm mb-4">For beginners</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹75</div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ 1 Build Credit</li>
                <li>✓ 4 Edit Credits</li>
                <li>✓ Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-black rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">6 Coins</h3>
                <span className="bg-white text-black text-xs px-2 py-1 rounded font-medium">Popular</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Best value</p>
              <div className="text-3xl font-bold mb-6">₹50</div>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>✓ 6 Credits</li>
                <li>✓ Build or Edit</li>
                <li>✓ Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">12 Coins</h3>
              <p className="text-gray-500 text-sm mb-4">For power users</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">₹100</div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ 12 Credits</li>
                <li>✓ Build or Edit</li>
                <li>✓ Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-8">Open our Telegram bot and start building now.</p>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800"
          >
            Open Telegram Bot →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">Contact: @Kdkdkesbot</p>
          <p className="text-gray-400 text-sm">© 2024 Kdkdkesbot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
