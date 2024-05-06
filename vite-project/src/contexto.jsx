import { createContext, useState } from "react";

export const contexto = createContext() ;
const Provider = contexto.Provider;

function CarritoProvider (props){
  const [cantCarrito, setCantCarrito] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(0)
  const [carrito, setCarrito] = useState([])



const agregarAlCarrito = (item) =>{}

const borrarDelCarrito = (id) => {}

const vaciarCarrito =() => {}

const valorActual ={
    carrito: carrito,
    cantCarrito: cantCarrito,
    precioTotal: precioTotal,
    agregarAlCarrito : agregarAlCarrito,
    borrarDelCarrito : borrarDelCarrito,
    vaciarCarrito : vaciarCarrito
}
  return (
<Provider value={valorActual}>
{props.children}
</Provider>
    )
}

export default CarritoProvider