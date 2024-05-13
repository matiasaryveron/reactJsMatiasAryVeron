import React, { useContext } from 'react';
import {contexto} from '../contexto.jsx'
import Swal from 'sweetalert2';

function Carrito() {
  
  const carritoContexto = useContext(contexto);

  const { carrito, cantCarrito, precioTotal } = carritoContexto;

  const handleSubmit = (e) =>{
    e.preventDefault()
    Swal.fire("Compra Finalizada", "", "success");
  }

  return (

    <div>
      <h2 className="text-gray-800 text-3xl font-bold text-center mb-4">MI CARRITO</h2>
      <div>
        {carrito.map((item) => {
       return(
<div className="flex justify-center p-2">
  <article key={item.id} className="border border-gray-200 p-4 rounded-md shadow-md flex items-center">
    <img src={item.img} className="w-10 h-10 mr-2" alt={item.name} />
    <div>
      <h3 className="text-sm font-semibold">{item.name}</h3>
      <p>Cantidad: {item.cantidad}</p>
      <p className="text-gray-600 text-xs">Precio: {item.price} {item.currency}</p>
    </div>
  </article>
</div>




      )
    })}
    </div>
    <form className="mx-auto max-w-sm" onSubmit={handleSubmit}>
  <h2 className="text-gray-800 text-2xl font-bold mb-4 text-center">Formulario de Envio</h2>
  <div className="mb-4">
    <input type="text" placeholder="Nombre" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="text" placeholder="Apellido" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="text" placeholder="Direccion" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <div className="mb-4">
    <input type="tel" placeholder="Número de Celular" title="Debe tener 10 dígitos" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto">Finalizar Compra</button>
</form>

    </div>
  )
}
export default Carrito;
