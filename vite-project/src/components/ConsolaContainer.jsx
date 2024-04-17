import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import Consola from "./Consola"

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
    .then((res) => {
      const id = +params.id;
      const encontprod = res.find(item => item.id === id) || {};
      setProducts([encontprod]);
    })
    .catch(() => console.log('mal'));

  miPromesa.finally(() => console.log('fin'));
}, [params.id])

 return (
  <>
   <Consola product={product} />
  </>
 );
}

export default ConsolasContainer