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
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>

        {/* Message */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-600 text-sm">
            Your credits have been added. You can now build your app.
          </p>
        </div>

        {/* Countdown */}
        <p className="text-gray-500 text-sm mb-4">
          Redirecting to Telegram in {countdown}s...
        </p>

        {/* Button */}
        <Link 
          href="https://t.me/Kdkdkesbot"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Open Telegram Bot
        </Link>
      </div>
    </main>
  );
}
