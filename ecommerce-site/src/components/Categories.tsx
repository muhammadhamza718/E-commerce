"use client";
import { motion } from 'framer-motion';
import React from 'react';


const categories = [
    { id: 1, name: 'Electronics', img: '/phone.webp', link: '/Electronics' },
    { id: 2, name: 'Fashion', img: '/fashion.webp', link: '/Fashions' },
    { id: 3, name: 'Furniture', img: '/Sofas.webp', link: '/Furnitures' },
  ];
  
  export default function Categories() {
    return (
      <>
        <section id="categories" className="pt-16 pb-24 px-4 poppins bg-gradient-to-tr from-gray-700 to-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="text-center">
                  <motion.div
                    className="flex-col gap-6"
                    layout
                  >
                    <motion.div
                      className="relative overflow-hidden flex w-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={category.img}
                        alt={category.name}
                        onClick={() => category.link && (window.location.href = category.link)}
                        className="w-full h-52 object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-125 hover:object-cover"
                      />
                    </motion.div>
                    <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  