import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Chinelo ZAXY CHAIN',
    price: 99.99,
    image: '/images/zaxy-chain.jpg',
  },
  {
    id: '2',
    name: 'Chinelo ZAXY ON',
    price: 99.99,
    image: '/images/zaxy-on.jpg',
  },
  {
    id: '3',
    name: 'Chinelo ZAXY BLINK',
    price: 99.99,
    image: '/images/zaxy-blink.jpg',
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
