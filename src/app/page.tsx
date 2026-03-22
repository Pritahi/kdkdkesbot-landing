import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-semibold text-gray-900">Kdkdkesbot</span>
          </div>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="bg-black text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Open Bot
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Build Web Apps with AI
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Describe your idea and get a complete web application in minutes. No coding required.
          </p>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="inline-block bg-black text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your web application ready in 2-5 minutes with AI-powered code generation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Easy Editing</h3>
              <p className="text-gray-600 leading-relaxed">
                Make changes to your application anytime through simple text commands.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Preview</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant live links to preview and share your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Bot</h3>
              <p className="text-gray-600 text-sm">Start @Kdkdkesbot on Telegram</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Describe</h3>
              <p className="text-gray-600 text-sm">Tell us your app idea</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600 text-sm">AI generates your app</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600 text-sm">Get your live link</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Pricing</h2>
          <p className="text-center text-gray-600 mb-16">Simple and transparent pricing</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Build Pack</h3>
              <p className="text-gray-500 text-sm mb-6">For beginners</p>
              <div className="text-4xl font-bold text-gray-900 mb-8">₹75</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>1 Build Credit</li>
                <li>4 Edit Credits</li>
                <li>Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 2 - Popular */}
            <div className="bg-black rounded-lg p-8 text-white">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">6 Coins</h3>
                <span className="bg-white text-black text-xs px-2 py-1 rounded font-medium">Popular</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Best value</p>
              <div className="text-4xl font-bold mb-8">₹50</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>6 Credits</li>
                <li>Build or Edit</li>
                <li>Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center bg-white text-black py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Buy Now
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">12 Coins</h3>
              <p className="text-gray-500 text-sm mb-6">For power users</p>
              <div className="text-4xl font-bold text-gray-900 mb-8">₹100</div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>12 Credits</li>
                <li>Build or Edit</li>
                <li>Live Preview</li>
              </ul>
              <Link 
                href="https://t.me/Kdkdkesbot"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-10">Open our Telegram bot and start building your application today.</p>
          <Link 
            href="https://t.me/Kdkdkesbot"
            className="inline-block bg-black text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Open Telegram Bot
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-semibold text-gray-900">Kdkdkesbot</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">Contact: @Kdkdkesbot</p>
              <p className="text-gray-400 text-sm mt-1">© 2024 Kdkdkesbot. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
