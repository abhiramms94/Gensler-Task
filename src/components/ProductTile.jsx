import React, { memo } from 'react';

const ProductTile = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => onAddToCart(product.id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default memo(ProductTile); //memo to prevent unwanted re-rendering