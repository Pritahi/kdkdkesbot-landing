import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-semibold text-gray-900 text-lg">Kdkdkesbot</span>
          </div>
          <Link 
            href="https://t.me/Kdkdkesbot" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Open Bot
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Build Apps with AI on Telegram
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Create web applications by describing what you want. No coding required.
        </p>
        <Link 
          href="https://t.me/Kdkdkesbot" 
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Start Building →
        </Link>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
              <p className="text-gray-600 text-sm">Open Telegram Bot</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
              <p className="text-gray-600 text-sm">Describe Your App</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
              <p className="text-gray-600 text-sm">AI Builds It</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
              <p className="text-gray-600 text-sm">Get Live Link</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">Build Pack</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">₹75</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• 1 Build Credit</li>
                <li>• 4 Edit Credits</li>
                <li>• Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block text-center border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>
            <div className="border-2 border-gray-900 rounded-xl p-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">Popular</span>
              <h3 className="font-semibold text-gray-900 mb-1">6 Coins Pack</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">₹50</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• 6 Credits</li>
                <li>• Build or Edit</li>
                <li>• Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-1">12 Coins Pack</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">₹100</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• 12 Credits</li>
                <li>• Build or Edit</li>
                <li>• Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot" 
                className="block text-center border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">Contact us on Telegram for any questions or support.</p>
          <Link 
            href="https://t.me/Kdkdkesbot" 
            className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium"
          >
            <span>📱</span>
            <span>@Kdkdkesbot</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p className="mb-2">© 2024 Kdkdkesbot. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </footer>
    </main>
  );
}
