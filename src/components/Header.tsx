import React from 'react';
import { Menu } from 'lucide-react';
import logo from '/logo.png';



const Header: React.FC = () => {
  return (
<header className="bg-white shadow-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
    <div className="flex items-center">
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="PwC Logo" className="w-20 h-12 mr-2" />
    </div>
    <h1 className="text-lg font-semibold text-gray-900">PwC Consulting</h1>
  </div>
</header>
  );
};

export default Header;
