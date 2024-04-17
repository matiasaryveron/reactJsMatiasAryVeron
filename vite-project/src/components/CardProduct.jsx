import React from 'react';
import { Link } from "react-router-dom";


function CardProduct({product}) {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <img src={product.img} alt={product.product} className="w-full h-48 object-contain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.product}</div>
        <p className="text-gray-700 text-base">{product.name}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/${product.id}`}>Ver mas</Link>
      </div>
    </div>
  );
}

export default CardProduct;
