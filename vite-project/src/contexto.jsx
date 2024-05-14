import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

function CarritoProvider(props) {
  const [cantCarrito, setCantCarrito] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (cant, item) => {
    setCantCarrito(cantCarrito + cant);

    const productoExistente = carrito.find((producto) => producto.id === item.id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((producto) =>
        producto.id === item.id
          ? { ...producto, cantidad: producto.cantidad + cant }
          : producto
      );
      setCarrito(carritoActualizado);
    } else {
      const productoConCantidad = { ...item, cantidad: cant };
      setCarrito([...carrito, productoConCantidad]);
    }
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
