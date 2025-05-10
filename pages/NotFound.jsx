import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
      <p className="mb-4">Oops! A página que você está procurando não existe.</p>
      <Link to="/" className="text-purple-600 underline">Voltar para a página inicial</Link>
    </div>
  );
}
