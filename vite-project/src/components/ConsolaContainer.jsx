import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"


function ConsolasContainer(){
  const [products, setProducts] = useState ([])
  const params = useParams()

useEffect(()=>{

const miPromesa = new Promise ((res)=>{
  setTimeout(()=>{
    res(data)
  },1000)
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
   {products.length !== 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
          </div>
        ))
      ) : (
        <div>Esperando productos</div>
      )}
  </>
 );
}

export default ConsolaContainer