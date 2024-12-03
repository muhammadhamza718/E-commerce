import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number; // Between 1-5
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60"
      />

      {/* Product Info */}
      <div className="p-4 pt-6">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>

        {/* Product Rating */}
        <div className="flex items-center mt-2">
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

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4 pb-8">
          <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
          <button className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
