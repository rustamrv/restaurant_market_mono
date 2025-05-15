"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../types/product';

export default function PopularMenuSection({ title = "Our popular menu" }: { title?: string }) {

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryQuery = selectedCategory ? `&category=${selectedCategory}` : '';
      const res = await fetch(`/api/pages/products?page=${currentPage}${categoryQuery}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    fetchProducts();
  }, [currentPage, selectedCategory]);

  return (
    <div className="w-full px-8 sm:px-20">
      <h2 className="text-center text-4xl font-bold text-gray-800">{title}</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(index === 0 ? '' : cat);
              setCurrentPage(1); // Reset to first page on category change
            }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              selectedCategory === cat || (index === 0 && selectedCategory === '')
                ? 'bg-[#3E260E] text-white'
                : 'bg-[#F5F5F5] text-gray-700 hover:bg-[#FFE0B3]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-lg"
          >
            <Image src={product.imageUrl} alt={product.name} width={140} height={140} />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            <div className="mt-4 text-[#FF8A00]">★★★★★</div>
            <div className="mt-4 flex w-full items-center justify-between px-4">
              <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
              <button className="rounded-full bg-[#FF8A00] px-4 py-2 text-sm text-white hover:bg-[#FF7A00]">
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-8 w-8 rounded-full ${
              currentPage === index + 1 ? 'bg-[#FF8A00] text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-[#FF7A00]`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}