import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🤖</span>
            <span className="text-white font-bold text-xl">Kdkdkesbot</span>
          </div>
          <Link 
            href="https://t.me/Kdkdkesbot" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
          >
            Open Bot
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Build Apps with AI on Telegram
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Create professional web applications instantly using our AI-powered Telegram bot. 
          No coding knowledge required. Just describe your app and get it built!
        </p>
        <Link 
          href="https://t.me/Kdkdkesbot" 
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
        >
          <span>Start Building Free</span>
          <span>→</span>
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Instant App Building</h3>
            <p className="text-blue-100">
              Describe your app idea and get a complete, working application in minutes.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-bold text-white mb-2">Easy Editing</h3>
            <p className="text-blue-100">
              Make changes to your app anytime. Just tell the bot what you want to modify.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">Live Preview</h3>
            <p className="text-blue-100">
              Get instant live links to preview and share your applications.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🏗️ Build Pack</h3>
            <div className="text-4xl font-bold text-green-600 mb-4">₹75</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ 1 Build Credit</li>
              <li>✓ 4 Edit Credits</li>
              <li>✓ Live Preview Link</li>
              <li>✓ GitHub Upload</li>
            </ul>
            <Link 
              href="https://t.me/Kdkdkesbot" 
              className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Buy Now
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl transform scale-105">
            <div className="text-yellow-300 text-sm font-bold mb-2">⭐ POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">💰 6 Coins Pack</h3>
            <div className="text-4xl font-bold text-white mb-4">₹50</div>
            <ul className="text-blue-100 space-y-2 mb-6">
              <li>✓ 6 Build/Edit Credits</li>
              <li>✓ Flexible Usage</li>
              <li>✓ Live Preview Link</li>
              <li>✓ GitHub Upload</li>
            </ul>
            <Link 
              href="https://t.me/Kdkdkesbot" 
              className="block text-center bg-white hover:bg-gray-100 text-blue-600 py-3 rounded-lg font-bold transition-all"
            >
              Buy Now
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">💰 12 Coins Pack</h3>
            <div className="text-4xl font-bold text-green-600 mb-4">₹100</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ 12 Build/Edit Credits</li>
              <li>✓ Best Value</li>
              <li>✓ Live Preview Link</li>
              <li>✓ GitHub Upload</li>
            </ul>
            <Link 
              href="https://t.me/Kdkdkesbot" 
              className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-white font-bold mb-2">Open Telegram</h3>
            <p className="text-blue-100 text-sm">Start chat with @Kdkdkesbot</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-white font-bold mb-2">Describe Your App</h3>
            <p className="text-blue-100 text-sm">Tell the bot what you want to build</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-white font-bold mb-2">AI Builds It</h3>
            <p className="text-blue-100 text-sm">Get your app in 2-5 minutes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-white font-bold mb-2">Live Link</h3>
            <p className="text-blue-100 text-sm">Share your app with anyone</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-blue-100 mb-6">Have questions? Reach out to us on Telegram</p>
          <Link 
            href="https://t.me/Kdkdkesbot" 
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-bold transition-all"
          >
            <span>📱</span>
            <span>@Kdkdkesbot</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Kdkdkesbot</h3>
              <p className="text-blue-200 text-sm">
                AI-powered app building service on Telegram. Build professional web applications without coding.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="text-blue-200 text-sm space-y-2">
                <li><Link href="https://t.me/Kdkdkesbot" className="hover:text-white">Open Bot</Link></li>
                <li><Link href="https://t.me/Kdkdkesbot" className="hover:text-white">Pricing</Link></li>
                <li><Link href="https://t.me/Kdkdkesbot" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-blue-200 text-sm">
            <p>© 2024 Kdkdkesbot. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
