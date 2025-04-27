import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto flex justify-between items-center relative">
    {/* Logo aligned left */}
    <div className="absolute left-0 flex items-center">
    <img src="/pwc-ai-showcase/logo.png" alt="PwC Logo" className="w-20 h-12 mr-2" />
    </div>

    {/* Centered Title */}
    <h1 className="text-xl font-semibold text-gray-900 mx-auto">
      PwC Consulting
    </h1>
  </div>
</header>

  );
};

export default Header;
