'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://t.me/Kdkdkesbot';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-500 mb-6">Thank you for your purchase</p>

        {/* Message */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <p className="text-gray-600">
            Your coins have been added to your account. You can now use them to build amazing apps!
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">Redirecting to Telegram in</p>
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-blue-600">{countdown}</span>
          </div>
        </div>

        {/* Button */}
        <Link 
          href="https://t.me/Kdkdkesbot"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          <span>📱</span>
          <span>Open Telegram Bot</span>
        </Link>

        {/* Help Text */}
        <p className="text-gray-400 text-sm mt-6">
          Having issues? Contact us on Telegram: <span className="text-blue-500">@Kdkdkesbot</span>
        </p>
      </div>
    </main>
  );
}
