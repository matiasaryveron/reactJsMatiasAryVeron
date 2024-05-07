import React from 'react';
import { Link } from "react-router-dom";


function CardProduct({product}) {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <div className="bg-gray-200 rounded-lg shadow-md">
      <img src={product.img} alt={product.product} className="w-full h-48 object-contain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.product}</div>
        <p className="text-gray-700 text-base">{product.name}</p>
        <p>{product.price.amount} {product.price.currency}</p>
        <div className={`p-4 ${product.stock > 0 ? 'bg-green-200' : 'bg-red-200'}`} >
            <strong>{product.stock > 0 ? 'Stock Disponible ✅' : 'Sin Stock ⛔'}</strong></div>
      </div>
      <div className="px-6 py-4">
        <Link to={`/item/${product.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">Ver mas</Link>
      </div>
    </div>
    </div>
  );
}

export default CardProduct;
