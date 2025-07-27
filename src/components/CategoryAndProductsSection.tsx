"use client"

import { Icon } from '@iconify/react';
import Image from 'next/image';

// Category data
const categories = [
  { id: 1, name: 'Phones', icon: 'ph:device-mobile-camera', isActive: false },
  { id: 2, name: 'Computers', icon: 'ph:desktop', isActive: false },
  { id: 3, name: 'SmartWatch', icon: 'ph:watch', isActive: false },
  { id: 4, name: 'Camera', icon: 'ph:camera', isActive: true },
  { id: 5, name: 'HeadPhones', icon: 'ph:headphones', isActive: false },
  { id: 6, name: 'Gaming', icon: 'ph:game-controller', isActive: false },
];

// Product data
const products = [
  {
    id: 1,
    name: 'DSLR Camera',
    image: '/images/hero-banner-1.png', // Replace with actual product image
    price: 549.99,
    originalPrice: 699.99,
    rating: 4,
    reviews: 65,
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    image: '/images/hero-banner-1.png', // Replace with actual product image
    price: 249.99,
    originalPrice: 329.99,
    rating: 5,
    reviews: 45,
  },
  {
    id: 3,
    name: 'Smart Watch Pro',
    image: '/images/hero-banner-1.png', // Replace with actual product image
    price: 399.99,
    originalPrice: 459.99,
    rating: 4,
    reviews: 38,
  },
  {
    id: 4,
    name: 'Laptop Pro',
    image: '/images/hero-banner-1.png', // Replace with actual product image
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 5,
    reviews: 73,
  },
];

const CategoryCard = ({ name, icon, isActive }: { name: string; icon: string; isActive: boolean }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 rounded-lg min-w-[140px] sm:min-w-0 w-full transition-all cursor-pointer
      ${isActive 
        ? 'bg-red-500 text-white border border-transparent' 
        : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-gray-300'}`}
  >
    <Icon icon={icon} className={`w-8 h-8 mb-3 ${isActive ? 'text-white' : 'text-gray-600'}`} />
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <div className="bg-white rounded-lg p-4 group relative">
    {/* Product Image */}
    <div className="relative h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
      />
      {/* Quick action buttons - appear on hover */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50" aria-label="Add to wishlist">
          <Icon icon="ph:heart" className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50" aria-label="Quick view">
          <Icon icon="ph:eye" className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>

    {/* Product Info */}
    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
    <div className="flex items-baseline gap-2 mb-2">
      <span className="text-red-500 font-semibold">${product.price}</span>
      {product.originalPrice && (
        <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>
      )}
    </div>

    {/* Rating */}
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon="ph:star-fill"
            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">({product.reviews})</span>
    </div>
  </div>
);

const SectionTitle = ({ label, heading }: { label: string; heading: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1 h-5 bg-red-500"></div>
      <span className="text-red-500 font-medium">{label}</span>
    </div>
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-gray-900">{heading}</h2>
      {heading === 'Best Selling Products' && (
        <button className="text-gray-500 hover:text-gray-700">View All</button>
      )}
    </div>
  </div>
);

export default function CategoryAndProductsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Categories Section */}
      <section className="mb-16">
        <SectionTitle label="Categories" heading="Browse By Category" />
        <div className="-mx-4 sm:mx-0">
          <div className="overflow-x-auto px-4 pb-4">
            <div className="flex gap-4 min-w-max sm:min-w-0 sm:grid sm:grid-cols-6 sm:gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  icon={category.icon}
                  isActive={category.isActive}
                />
              ))}
            </div>
          </div>
        </div>
      </section>      {/* Products Section */}
      <section>
        <SectionTitle label="This Month" heading="Best Selling Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
