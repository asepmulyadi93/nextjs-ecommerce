"use client"

import Image from "next/image";
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Exclusive */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Exclusive</h3>
              <h4 className="font-semibold mb-2">Subscribe</h4>
              <p className="text-gray-400 mb-4">Get 10% off your first order</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
                />
                <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600">
                  →
                </button>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-400 mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p className="text-gray-400 mb-2">exclusive@gmail.com</p>
              <p className="text-gray-400">+88015-88888-9999</p>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-xl font-bold mb-4">Account</h3>
              <ul className="space-y-2">
                {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Link</h3>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-xl font-bold mb-4">Download App</h3>
              <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
              <div className="w-20 h-20 bg-gray-700 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="w-32 h-10 bg-gray-700 rounded"></div>
                <div className="w-32 h-10 bg-gray-700 rounded"></div>
              </div>
              <div className="flex gap-4 mt-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
                  <a key={index} href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© Copyright 2023. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
