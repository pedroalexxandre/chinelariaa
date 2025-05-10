import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-purple-700 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Chinelaria</Link>
      <Link to="/carrinho" className="relative">
        🛒 Carrinho
        <span className="ml-1 bg-white text-purple-700 rounded-full px-2 text-sm">
          {cartItems.length}
        </span>
      </Link>
    </nav>
  );
}
