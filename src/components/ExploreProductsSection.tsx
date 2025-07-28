"use client"

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

import { Product, products } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-white rounded-lg group relative">
    {/* Product Image Container */}
    <div className="relative h-[300px] bg-gray-100 rounded-t-lg overflow-hidden group-hover:bg-gray-50 transition-colors">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-contain p-6"
      />
      
      {/* Quick action buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors" aria-label="Add to wishlist">
          <Icon icon="ph:heart" className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors" aria-label="Quick view">
          <Icon icon="ph:eye" className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* New Badge */}
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-medium px-2.5 py-1.5 rounded">
          NEW
        </span>
      )}

      {/* Add to Cart Button */}
      {product.hasAddToCart && (
        <button className="absolute bottom-0 left-4 right-4 bg-black text-white py-2.5 rounded font-medium hover:bg-gray-900 transition-all translate-y-full group-hover:translate-y-0">
          Add To Cart
        </button>
      )}
    </div>

    {/* Product Info */}
    <div className="p-4">
      <h3 className="font-medium text-gray-900 mb-1.5 text-[15px]">{product.name}</h3>
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-red-500 font-semibold">${product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-400 text-sm line-through">${product.originalPrice}</span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon="ph:star-fill"
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">({product.reviews})</span>
      </div>

      {/* Color Options */}
      {product.colors && (
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full border border-gray-200 shadow-sm hover:scale-110 transition-transform`}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function ExploreProductsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-5 bg-red-500"></div>
              <span className="text-red-500 font-medium">Our Products</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Explore Our Products</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous products"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next products"
            >
              <Icon icon="mdi:arrow-right" className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-red-500 text-white px-8 py-4 rounded font-medium hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
