import React, { useEffect, useState } from 'react';
import data from "./data.json";
import { useParams } from "react-router-dom"
//ACA QUIERO EXTRAER LA INFORMACION DEL DATA.JSON PARA QUE EL USUARIO DESDE CONSOLAS, HAGA CLIC EN VER MAS Y PUEDA VER LA INFORMACION DEL PRODUCTO. LO QUISE HACER IGUAL QUE HICIMOS LA ANTERIOR PROMESA PERO SACANDOLE EL SET TIME OUT, PERO NO PUDE. TAMPOCO SABRIA HACERLO CON EL FETCH USANDO EL DATA.JSON.POR OTRO LADO,QUERIA HACER UN CAROUSEL CON ANT DESIGN Y TAMBIEN. ESTOY MUY FLOJO A LA HORA DE TRAER UN ARRAY Y SACAR LOS DATOS DE ELLA.
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

