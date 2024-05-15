import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

function CarritoProvider(props) {
  const [cantCarrito, setCantCarrito] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [carrito, setCarrito] = useState({});

  const agregarAlCarrito = (cant, item) => {
        
    console.log("Carrito antes de agregar algo: " + JSON.stringify(item))

    if (item.id in carrito){
      const foundItem = carrito[item.id]
      foundItem.cantidad = cant
      carrito[item.id] = foundItem
      setCarrito(carrito)
    }else{
      console.log("el item no existe en el carrito")
      item.cantidad = cant
      const newCarrito = { ...carrito}
      newCarrito[item.id] = item
      setCarrito(newCarrito)
    }

    const sum = Object.values(carrito).reduce((total, valor) => total + valor.cantidad, 0);
    setCantCarrito(sum)
  };
  
  const borrarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    if (producto) {
      const carritoActualizado = carrito.filter((producto) => producto.id !== id);
      setCarrito(carritoActualizado);
      setCantCarrito(cantCarrito - producto.cantidad);
    }
  };

  const vaciarCarrito = () => {
    setCantCarrito(0);
    setCarrito([]);
  };

  const valorActual = {
    carrito: carrito,
    cantCarrito: cantCarrito,
    precioTotal: precioTotal,
    agregarAlCarrito: agregarAlCarrito,
    borrarDelCarrito: borrarDelCarrito,
    vaciarCarrito: vaciarCarrito,
  };

  return <Provider value={valorActual}>{props.children}</Provider>;
}

export default CarritoProvider;