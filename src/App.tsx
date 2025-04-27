import React, { useState, useEffect } from 'react';
import { links } from './data/links';
import DesktopTiles from './components/DesktopTiles';
import MobileCarousel from './components/MobileCarousel';
import Header from './components/Header';
import './styles/animations.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consulting at the Age of Innovation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how PwC can help you solve your complex business challenges
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse-subtle h-16 w-16 rounded-full bg-orange-500"></div>
            </div>
          ) : (
            <div className="mt-8">
              {isMobile ? (
                <MobileCarousel links={links} />
              ) : (
                <DesktopTiles links={links} />
              )}
            </div>
          )}

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-orange-100">Contact our team of experts to help solve your business challenges</p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-orange-600 font-medium px-6 py-3 rounded-full hover:bg-orange-50 transition-colors"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 mt-0  text-center">
        
  <p>© 2025 PwC. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;