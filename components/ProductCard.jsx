import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold text-center">{product.name}</h2>
      <p className="text-green-600 font-bold">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
