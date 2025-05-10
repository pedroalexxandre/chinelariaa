import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>R$ {item.price.toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Total: R$ {total.toFixed(2)}</div>
    </div>
  );
}
