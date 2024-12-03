"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  date: string;
  popularity: number;
  rating: number; // Between 1-5
}

// Mock data for furniture products
const furnitureProductData: Product[] = [
  { id: 1, name: "Modern Sofa Set", price: 219.99, date: "2024-11-20", popularity: 90, rating: 5, image: "/sofa.jpg" },
  { id: 2, name: "Wooden Dining Table", price: 119.99, date: "2024-11-18", popularity: 85, rating: 4, image: "/dining-table.jpg" },
  { id: 3, name: "Luxury Office Chair", price: 149.00, date: "2024-11-15", popularity: 95, rating: 5, image: "/office-chair.jpg" },
  { id: 4, name: "King Size Bed", price: 249.99, date: "2024-11-25", popularity: 80, rating: 4, image: "/bed.jpg" },
  { id: 5, name: "Stylish Bookshelf", price: 149.99, date: "2024-11-10", popularity: 70, rating: 3, image: "/bookshelf.jpg" },
  { id: 6, name: "Outdoor Patio Set", price: 249.99, date: "2024-11-22", popularity: 60, rating: 3, image: "/patio-set.jpg" },
  { id: 7, name: "Classic Coffee Table", price: 119.99, date: "2024-11-30", popularity: 85, rating: 4, image: "/coffee-table.jpg" },
  { id: 8, name: "Recliner Chair", price: 119.99, date: "2024-11-12", popularity: 90, rating: 5, image: "/recliner-chair.jpg" },
];

export default function FurniturePage() {
  const [filteredProducts, setFilteredProducts] = useState(furnitureProductData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilter = (filterType: "latest" | "popular" | "oldest") => {
    const sortedProducts = [...furnitureProductData];
    switch (filterType) {
      case "latest":
        sortedProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "popular":
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case "oldest":
        sortedProducts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      default:
    }
    setFilteredProducts(sortedProducts);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <button className="flex justify-center items-center fixed bg-blue-500 hover:bg-blue-600 text-white font-bold h-10 w-16 my-4 mx-6 rounded-lg shadow-lg transition-all">
        <Link href="./#hero" className="flex justify-center items-center w-full h-full">
          Back
        </Link>
      </button>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-700 to-gray-900">
        <h2 className="text-4xl font-bold mb-4">Discover Premium Furniture</h2>
        <p className="text-gray-400 mb-8">Enhance your living space with our exclusive collection.</p>
      </section>

      {/* Product Section with Dropdown Filter */}
      <section id="products" className="py-10 px-2 sm:px-6 bg-gradient-to-tr from-gray-700 to-gray-900">
        <div className="flex justify-around gap-3 mb-4">
          <h3 className="text-xl font-bold text-center mb-8 sm:text-2xl md:text-3xl">Featured Furniture</h3>
          <div className="relative flex justify-center mb-8">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
            >
              Filter Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.292a1 1 0 011.416 0L10 10.585l3.292-3.293a1 1 0 011.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-10 mr-7 w-48 bg-gray-800 rounded-lg">
                <button
                  onClick={() => handleFilter("latest")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-900 hover:rounded-lg"
                >
                  Latest
                </button>
                <button
                  onClick={() => handleFilter("popular")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-900 hover:rounded-lg"
                >
                  Popular
                </button>
                <button
                  onClick={() => handleFilter("oldest")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-900 hover:rounded-lg"
                >
                  Oldest
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 object-cover">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-gray-800 shadow-md rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col px-4 py-2 sm:p-4">
                <h4 className="font-bold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < product.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 ${
                        index < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">Released: {product.date}</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
