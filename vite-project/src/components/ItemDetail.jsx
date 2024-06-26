import React, { useContext } from 'react';
import ItemCount from './ItemCount.jsx';
import {contexto} from '../contexto.jsx';

function ItemDetail({ product }) {

  const valorActual = useContext(contexto);
  const {id, name} = product
  
  const handleConfirm = (numero) => {
    valorActual.agregarAlCarrito(numero, product) 
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-16 ">
      <div className="w-full max-w-sm p-6 bg-gray-200 rounded-lg shadow-md gap-20">
          <div key={id} className="text-center">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2> 
            <img src={product.img} alt={product.name} className="mx-auto mb-2 rounded-lg max-w-xs" />
            <p className="text-sm mb-2">{product.product}</p>
            {product.plataform && (
              <p className="text-sm mb-2">{product.plataform}</p>)}
            <p className="text-sm mb-2">{product.name}</p>
            <p className="text-sm mb-4">{product.price} {product.currency}</p>
            <div className={`p-2 ${product.stock > 0 ? 'bg-green-200' : 'bg-red-200'} rounded-lg mb-2`}>
              <strong className="text-xs">{product.stock > 0 ? 'Stock Disponible ✅' : 'Sin Stock ⛔'}</strong>
            </div> 
            {product.stock > 0 && ( 
              <ItemCount handleConfirm={handleConfirm} />
            )}
          </div>
      </div>
    </div>
  );
}

export default ItemDetail;