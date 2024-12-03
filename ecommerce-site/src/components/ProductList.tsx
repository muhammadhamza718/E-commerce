"use client";

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const productList = [
  {
    id: 1, name: "Apple AirPods Max Wireless Over-Ear...", price: 648.00, date: "2024-11-18", popularity: 80, rating: 5, image: "/headphone.jpg"
  },
  {
    id: 2, name: "Leather Jacket", price: 249.99, date: "2024-11-12", popularity: 90, rating: 5, image: "/leather-jacket1.jpg"
  },
  {
    id: 3, name: "GTPLAYER Gaming Chair, Office Chair...", price: 379.79, date: "2024-11-22", popularity: 80, rating: 4, image: "/gaming-chair.jpg"
  },
  {
    id: 5, name: "Mini Portable Bluetooth & Rechargea...", price: 49.99, date: "2024-11-25", popularity: 60, rating: 3, image: "/bluetooth-speaker.jpg"
  },
  {
    id: 1, name: "Samsung 49'' LC49G95TSSMXZN Odyssey...", price: 666.00, date: "2024-11-20", popularity: 80, rating: 5, image: "/4k-monitor.jpg"
  },
  {
    id: 6, name: "ANŃE PRO 2, 60% Wired/Wireless Blue...", price: 79.99, date: "2024-11-10", popularity: 65, rating: 3, image: "/mechanical-keyboard.jpg"
  },
];

export default function ProductList() {
  return (
    <section className="py-24 poppins overflow-hidden px-4 bg-gradient-to-tr from-gray-700 to-gray-900">
      <div className="container mx-auto h-auto">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-8 text-white">Top Products</h2>
        <div className="relative flex space-x-6 overflow-hidden">
          {/* Scrolling container */}
          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 50,
              // ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate product cards to create an infinite loop */}
            {productList.concat(productList).map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-auto text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
