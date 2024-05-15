 import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemList from './ItemList';
import { getProduct } from './functions';

function ItemListContainer(){
  const [product, setProduct] = useState ([])
  const params = useParams()

  useEffect(()=>{
   getProduct ()
   .then ((resultado) => {
    setProduct(resultado)
   })

  }, []); 

  return (
    <>
      {
        product.length !== 0
        ? <ItemList product={product} />
        : <div> Esperando productos</div>
      }
    </>
  );
}

export default ItemListContainer; 
