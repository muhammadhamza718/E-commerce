"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  date: string;
  popularity: number;
  rating: number; // Between 1-5
}

// Mock data for products
const productData : Product[] = [
  { id: 1, name: "Samsung 49'' LC49G95TSSMXZN Odyssey...", price: 666.00, date: "2024-11-20", popularity: 80, rating: 5, image: "/4k-monitor.jpg" },
  { id: 2, name: "Apple AirPods Max Wireless Over-Ear...", price: 648.00, date: "2024-11-18", popularity: 80, rating: 5, image: "/headphone.jpg" },
  { id: 5, name: "Mini Portable Bluetooth & Rechargea...", price: 49.99, date: "2024-11-25", popularity: 60, rating: 3, image: "/bluetooth-speaker.jpg" },
  { id: 6, name: "ANŃE PRO 2, 60% Wired/Wireless Blue...", price: 79.99, date: "2024-11-10", popularity: 65, rating: 3, image: "/mechanical-keyboard.jpg" },
  { id: 3, name: "GTPLAYER Gaming Chair, Office Chair...", price: 379.79, date: "2024-11-22", popularity: 80, rating: 4, image: "/gaming-chair.jpg" },
  { id: 4, name: "Apple Watch Series 5 44mm GPS", price: 169.99, date: "2024-11-15", popularity: 50, rating: 3, image: '/smart-watch.jpg' },
  { id: 7, name: "Drone: DJI Mini 3 Pro", price: 949.95, date: "2024-11-30", popularity: 70, rating: 4, image: "/Drones.jpg" },
  { id: 8, name: "VR Headsets: Meta Quest 3", price: 666.00, date: "2024-11-12", popularity: 90, rating: 5, image: "/VR-Headsets.jpg" },
  { id: 9, name: "Microphones: Blue Yeti", price: 140.18, date: "2024-11-05", popularity: 60, rating: 4, image: "/studio-microphone.jpg" },
  { id: 10, name: "Gaming Consoles: PlayStation 5", price: 499.55, date: "2024-11-20", popularity: 85, rating: 5, image: "/gaming-consoles-playStation.jpg" },
  { id: 11, name: "camera: Canon EOS R6", price: 2529.33, date: "2024-11-20", popularity: 60, rating: 4, image: "/camera.jpg" },
];

export default function ElectronicsPage() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilter = (filterType: "latest" | "popular" | "oldest") => {
    const sortedProducts = [...productData];
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
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <button className="flex justify-center items-center fixed bg-blue-500 hover:bg-blue-600 text-white font-bold h-10 w-16 my-4 mx-6 rounded-lg shadow-lg transition-all">
        <Link href="./#hero" className="flex justify-center items-center w-full h-full">
          Back
        </Link>
      </button>
      {/* Hero Section */}
      <section id="Electronics" className="text-center py-16 bg-gradient-to-br from-gray-700 to-gray-900">
        <h2 className="text-4xl font-bold mb-4">Latest Electronics at Unbeatable Prices</h2>
        <p className="text-gray-400 mb-8">Discover the best gadgets and tech products for every budget.</p>
      </section>

      {/* Product Section with Dropdown Filter */}
      <section id="products" className="py-10 px-2 sm:px-6 bg-gradient-to-tr from-gray-700 to-gray-900">
        <div className="flex justify-around gap-3 mb-4">
            <h3 className="text-xl font-bold text-center mb-8 sm:text-2xl md:text-3xl">Featured Products</h3>
            {/* Dropdown Button */}
            <div className="relative flex justify-center mb-8">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center"
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

            {/* Dropdown Menu */}
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
              <div className="flex flex-col justify-items-end px-4 py-2 sm:p-4 md:px-2 md:py-4">
                <h4 className=" font-bold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-2">${typeof product.price === 'number' ? product.price.toFixed(2) : ''}</p>
                <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < product.rating ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-5 h-5 ${
                            index < product.rating ? 'text-yellow-500' : 'text-gray-300'
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
                <p className="text-gray-600 ">Released: {product.date}</p>
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-blue-500 text-white px-2 py-auto sm:px-4 sm:py-auto md:px-1.5 md:py-auto lg:px-3 lg:py-4 rounded-md hover:bg-blue-600 transition-colors">
                        Add to Cart
                    </button>
                    <button className="bg-gray-600 text-white px-2 py-auto sm:px-4 sm:py-auto md:px-1.5 md:py-auto lg:px-3 lg:py-4 rounded-md hover:bg-gray-700 transition-colors">
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
