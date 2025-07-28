"use client"

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { categories } from '@/data/categories';
import { heroSlides as slides } from '@/data/hero-slides';

export default function HomeHeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide(index);
      setTimeout(() => setIsTransitioning(false), 500); // Match this with CSS transition duration
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % slides.length);
  }, [activeSlide, goToSlide]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar Categories */}
        <div className="w-full lg:w-1/4">
          <nav className="bg-white rounded-lg shadow-sm h-full">
            <ul className="divide-y divide-gray-100">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    {category.hasSubmenu && (
                      <Icon 
                        icon="heroicons:chevron-right" 
                        className="w-5 h-5 text-gray-400"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero Banner */}
        <div className="w-full lg:w-3/4">
          <div className="relative bg-gradient-to-r from-black to-gray-900 rounded-2xl overflow-hidden h-[480px] sm:h-[320px] lg:h-[460px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                  ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                {/* Mobile Layout (flex-col) for < sm, Desktop Layout (absolute positioning) for >= sm */}
                <div className="h-full sm:block">
                  {/* Mobile Only: Flex Container */}
                  <div className="flex flex-col h-full sm:hidden">
                    {/* Text Content for Mobile */}
                    <div className="pt-6 px-6 text-center">
                      {/* Logo and Series Text */}
                      <div className="flex items-center gap-2 mb-3 justify-center">
                        <Icon 
                          icon="mdi:apple" 
                          className="w-6 h-6 text-white" 
                        />
                        <span className="text-lg text-white">{slide.title}</span>
                      </div>

                      {/* Headline */}
                      <h2 className="text-3xl font-bold text-white mb-3">
                        {slide.discount} <br />
                        off Voucher
                      </h2>

                      {/* Shop Now Button */}
                      <a 
                        href="#" 
                        className="inline-flex items-center text-white hover:text-gray-100 justify-center"
                      >
                        <span className="underline underline-offset-4">Shop Now</span>
                        <Icon 
                          icon="heroicons:arrow-right" 
                          className="w-5 h-5 ml-2" 
                        />
                      </a>
                    </div>

                    {/* Product Image for Mobile */}
                    <div className="flex-1 min-h-[280px] relative mt-4 px-6">
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          priority
                          sizes="100vw"
                          style={{ 
                            objectFit: 'contain',
                            objectPosition: 'center'
                          }}
                          className="transform scale-110 transition-transform duration-500 ease-in-out"
                        />
                      </div>
                    </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                {/* Text Content for Desktop */}
                <div className="absolute inset-0 z-10 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon 
                      icon="mdi:apple" 
                      className="w-6 h-6 text-white" 
                    />
                    <span className="text-lg text-white">{slide.title}</span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                    {slide.discount} <br />
                    off Voucher
                  </h2>

                  <a 
                    href="#" 
                    className="inline-flex items-center text-white hover:text-gray-100"
                  >
                    <span className="underline underline-offset-4">Shop Now</span>
                    <Icon 
                      icon="heroicons:arrow-right" 
                      className="w-5 h-5 ml-2" 
                    />
                  </a>
                </div>

                {/* Product Image for Desktop */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-[95%] flex items-center justify-end">
                  <div className="relative w-[95%] h-full mr-6">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 45vw"
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                      className="transform scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
            ))}
            {/* Navigation Arrows */}
            <button
              onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <Icon icon="heroicons:chevron-left" className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <Icon icon="heroicons:chevron-right" className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300
                    ${index === activeSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
