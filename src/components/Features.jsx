import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Features = () => {
  return (
    <div>
      <Navbar />
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Powerful Features for Modern Video Calling
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for seamless video communication
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-100 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">HD Video Quality</h3>
              <p className="mt-3 text-base text-gray-600">
                Crystal clear video calls with adaptive quality for the best experience
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-200 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Group Calls</h3>
              <p className="mt-3 text-base text-gray-600">
                Connect with multiple people at once - perfect for team meetings
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-300 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Secure & Private</h3>
              <p className="mt-3 text-base text-gray-600">
                End-to-end encryption keeps your conversations private and secure
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-400 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Easy Sharing</h3>
              <p className="mt-3 text-base text-gray-600">
                Share room links instantly - no downloads or signups required
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-500 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Screen Sharing</h3>
              <p className="mt-3 text-base text-gray-600">
                Share your screen for presentations and collaborative work
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl animate-fadeIn delay-600 hover-scale">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-pink-500 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Cross Platform</h3>
              <p className="mt-3 text-base text-gray-600">
                Works seamlessly on desktop, tablet, and mobile devices
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
