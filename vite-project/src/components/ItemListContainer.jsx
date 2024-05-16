 import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemList from './ItemList';
import { getProduct, getProductFromCategory } from './functions';

function ItemListContainer(){
  const [product, setProduct] = useState ([])
  const params = useParams()
  console.log(params)

  useEffect(()=>{

   if (!params.id){
   getProduct ()
   .then ((resultado) => {
    setProduct(resultado)
   })
  } else {
   getProductFromCategory(params.id)
   .then((resultado)=> {
    setProduct(resultado)
   })
  }

  }, [params.id]); 

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
