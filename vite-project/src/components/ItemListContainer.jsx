import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "./data.json"


function ItemListContainer(){
  const {id} = useParams()
  useEffect(()=>{

const miPromesa = new Promise ((res)=>{
  setTimeout(()=>{
    res(data)
  },2000)
})
miPromesa.then((res)=>{
  console.log (res)
})
miPromesa.catch(() => console.log('mal'));
miPromesa.finally(() => console.log('fin'));
}, [])

 return <div>Este es el ItemListContainer</div>;
}


export default ItemListContainer