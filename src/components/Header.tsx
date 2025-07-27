"use client"

import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex-1 px-4 overflow-hidden">
            <span className="whitespace-nowrap animate-scroll">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          </div>
          <div className="flex items-center gap-4 w-24 justify-end">
            <select className="bg-transparent border-none text-white">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="text-[24px] font-bold text-black">Exclusive</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-black hover:border-b-2 hover:border-black">Home</a>
            <a href="#" className="text-black hover:border-b-2 hover:border-black">Contact</a>
            <a href="#" className="text-black hover:border-b-2 hover:border-black">About</a>
            <a href="#" className="text-black hover:border-b-2 hover:border-black">Sign Up</a>
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="text-black text-[12px] pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Icon icon="iconoir:search" className="w-5 h-5 absolute right-3 top-2.5 text-gray-600" />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Icon icon="mdi-light:heart" className="w-6 h-6 text-black" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Icon icon="mdi-light:cart" className="w-6 h-6 text-black" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon 
                  icon={isMobileMenuOpen ? "heroicons:x-mark" : "heroicons:bars-3"} 
                  className="w-6 h-6 text-black" 
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full text-black text-[12px] pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Icon icon="iconoir:search" className="w-5 h-5 absolute right-3 top-2.5 text-gray-600" />
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-black hover:text-gray-600 py-2 border-b border-gray-100">Home</a>
                <a href="#" className="text-black hover:text-gray-600 py-2 border-b border-gray-100">Contact</a>
                <a href="#" className="text-black hover:text-gray-600 py-2 border-b border-gray-100">About</a>
                <a href="#" className="text-black hover:text-gray-600 py-2">Sign Up</a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
