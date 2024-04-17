import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import {Button} from 'antd'


function ConsolasContainer(){
  const [product, setProducts] = useState ([])
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
   {product.length !== 0 ? (
        product.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
            <p>{product.product}</p>
            <p>{product.name}</p>
            <p>{product.price}</p><div key={index}
          className={`p-4 ${product.stock > 0 ? 'bg-green-200' : 'bg-red-200'}`} >
            <p>{product.stock > 0 ? 'Stock Disponible' : 'Sin Stock'}</p></div>
            <Button>Comprar</Button>
          </div>
        ))
      ) : (
        <div>Esperando productos</div>
      )}
  </>
 );
}

export default ConsolasContainer