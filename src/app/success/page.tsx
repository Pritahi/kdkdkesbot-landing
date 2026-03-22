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
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your credits have been added.
        </p>

        {/* Countdown */}
        <p className="text-gray-500 text-sm mb-6">
          Redirecting to Telegram in {countdown} seconds...
        </p>

        {/* Button */}
        <Link 
          href="https://t.me/Kdkdkesbot"
          className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800"
        >
          Open Telegram Bot →
        </Link>
      </div>
    </main>
  );
}
