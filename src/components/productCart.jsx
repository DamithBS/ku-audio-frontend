import React from "react";
import "./productCart.css";

export default function ProductCart({ item }) {
  return (
    <div className="w-[250px] h-[400px] bg-white m-5 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      <img
        src={item.image[0]}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          {item.availability ? (
            <span className="text-sm font-medium text-green-500">Available</span>
          ) : (
            <span className="text-sm font-medium text-red-500">Out of Stock</span>
          )}
        </div>
        <p className="text-gray-600 text-sm my-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">${item.price}</span>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">{item.category}</span>
            <span className="text-xs text-gray-500">{item.dimensions}</span>
          </div>
        </div>
        <div className="mt-4 mx-auto">
          <button
            disabled={!item.availability}
            className={`w-full py-2 rounded transition-colors text-white ${
              item.availability
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
