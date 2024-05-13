import React, { useContext } from 'react';
import {contexto} from '../contexto.jsx'

function Carrito() {
  
  const carritoContexto = useContext(contexto);

  const { carrito, cantCarrito, precioTotal } = carritoContexto;

  return (

    <div>
      <h2 className="text-gray-800 text-3xl font-bold text-center mb-4">Carrito de Compras</h2>
      <div>
        {carrito.map((item) => {
       return(
          <article key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: {item.price} {item.currency}</p>
            <p>Plataforma: {item.plataform}</p>
            <p>Stock: {item.stock}</p>
            <p>Cantidad: {item.cantidad}</p>
          </article>
      )
    })}
    </div>
    <form className="mx-auto max-w-sm">
  <h2 className="text-gray-800 text-2xl font-bold mb-4 text-center">Formulario de Envio</h2>
  <div className="mb-4">
    <input type="text" placeholder="Nombre" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="text" placeholder="Apellido" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="tel" placeholder="Número de Celular" pattern="[0-9]{10}" title="Debe tener 10 dígitos" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto">Finalizar Compra</button>
</form>

    </div>
  )
}
export default Carrito;
