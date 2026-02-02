import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Resources = () => {
  return (
    <div>
      <Navbar />
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Resources & Support
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to get the most out of VideoCall
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Documentation</h3>
              <p className="text-gray-600 text-center mb-4">
                Comprehensive guides and tutorials to help you get started
              </p>
              <div className="text-center">
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read Docs →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Video Tutorials</h3>
              <p className="text-gray-600 text-center mb-4">
                Step-by-step video guides for all features
              </p>
              <div className="text-center">
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
                  Watch Videos →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Get help whenever you need it from our support team
              </p>
              <div className="text-center">
                <a href="#" className="text-pink-600 font-semibold hover:text-pink-700">
                  Contact Support →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How do I create a room?</h4>
                <p className="text-gray-600">Simply click the "Create New Room" button on the homepage and you'll get a unique room ID that you can share with others.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Is it really free?</h4>
                <p className="text-gray-600">Yes! VideoCall is completely free to use with no hidden costs or subscription fees.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How many people can join a call?</h4>
                <p className="text-gray-600">You can have multiple participants in a single room, making it perfect for team meetings and group calls.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Do I need to download anything?</h4>
                <p className="text-gray-600">No downloads required! VideoCall works directly in your web browser on any device.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Is my call secure?</h4>
                <p className="text-gray-600">Absolutely! All calls are encrypted end-to-end to ensure your privacy and security.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I use it on mobile?</h4>
                <p className="text-gray-600">Yes! VideoCall is fully responsive and works seamlessly on mobile devices, tablets, and desktops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
