import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import ItemList from './ItemList';

function ItemListContainer(){
  const [products, setProducts] = useState ([])
  const params = useParams()

useEffect(()=>{

const miPromesa = new Promise ((res)=>{
  setTimeout(()=>{
    res(data)
  },2000)
})
miPromesa
.then((res)=>{
  setProducts(res)
  console.log (res)
})
.catch(() => console.log('mal'));
miPromesa.finally(() => console.log('fin'));
}, [])

 return (
  <>
  {
  products.length !==0
  ? <ItemList products={products} />
  : <div> Esperando productos</div>
}
  </>
 );
}

export default ItemListContainer