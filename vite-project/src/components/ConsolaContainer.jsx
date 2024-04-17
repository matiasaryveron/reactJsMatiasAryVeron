import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"

function ConsolaContainer(){
  
  const params = useParams()
  const [product, setProducts] = useState ([])

useEffect(()=>{

const miPromesa = new Promise ((res)=>{
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
 <div>
  <h2>detalle del personaje{id}</h2>

  <img src={product.img} alt={product.name}/>
  /</div>
  
 );
}

export default ConsolaContainer

