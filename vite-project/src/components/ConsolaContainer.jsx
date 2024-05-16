import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductDetail } from './functions';

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
      const encontprod = res.find(item => item.id === id) || {};
      setProducts(encontprod);
    })
    .catch(() => console.log('mal'));

  miPromesa.finally(() => console.log('fin'));
}, [params.id])

 
/* getProductDetail(id)
.then((resultado) => {
  setProducts(resultado)
})
}, []) */

return (
  <>
   <ItemDetail product={product} />
  </>
 );
}

export default ConsolasContainer