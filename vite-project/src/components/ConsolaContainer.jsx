import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ConsolasContainer(){
  const [product, setProducts] = useState ([])
  const params = useParams()

useEffect(()=>{

const miPromesa = new Promise ((res)=>{
  setTimeout(()=>{
    res(data)
  },)
})
miPromesa
    .then((res) => {
      const id = +params.id;
      const encontrado = res.find(item => item.id === id) || {};
      setProducts([encontrado]);
    })
    .catch(() => console.log('mal'));

  miPromesa.finally(() => console.log('fin'));
}, [params.id])

 return (
  <>
   <ItemDetail product={product} />
  </>
 );
}

export default ConsolasContainer