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
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Successful</h1>
          <p className="text-gray-600">Thank you for your purchase. Your credits have been added to your account.</p>
        </div>

        {/* Info Card */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <span className="text-gray-600">Status</span>
            <span className="text-green-600 font-medium">Completed</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">What&apos;s Next</span>
            <span className="text-gray-900 font-medium">Start Building</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm">
            Redirecting to Telegram in <span className="font-semibold text-gray-900">{countdown}</span> seconds...
          </p>
        </div>

        {/* Button */}
        <Link 
          href="https://t.me/Kdkdkesbot"
          className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-colors"
        >
          <span>Open Telegram Bot</span>
          <span>→</span>
        </Link>

        {/* Help */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Need help? <Link href="https://t.me/Kdkdkesbot" className="text-gray-700 hover:text-gray-900">Contact us</Link>
        </p>
      </div>
    </main>
  );
}
