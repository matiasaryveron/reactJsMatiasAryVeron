import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import {Button} from 'antd'
import Consola from './Consola';

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
   {product.length !== 0 ? <Consola products={products} />: 
        <div>Esperando productos</div>
      }
  </>
 );
}

export default ConsolasContainer