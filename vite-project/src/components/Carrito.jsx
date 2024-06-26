
import React, { useContext } from 'react';
import { contexto } from '../contexto.jsx';
import Swal from 'sweetalert2';
import { createSale } from './functions.js';
function Carrito() {
  const carritoContexto = useContext(contexto);
  const { carrito, cantCarrito, precioTotal, vaciarCarrito } = carritoContexto;

  const calcularPrecioTotal = () => {
    let total = 0;
    Object.keys(carrito).forEach((key) => {
      total += carrito[key].price * carrito[key].cantidad;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Compra Finalizada", "", "success");
    vaciarCarrito(); 
    /* createSales() */
  };

  return (
    <div>
      <h2 className="text-white-800 text-3xl font-bold text-center mb-4">MI CARRITO</h2>
      {Object.keys(carrito).length === 0 && (
        <div className="flex justify-center p-2">
          <h3 className="border border-white bg-white p-4 rounded-md shadow-md text-center font-bold text-black">CARRITO VACIO</h3>
        </div>
      )}

      {Object.keys(carrito).length > 0 && (
        <div>
          {Object.keys(carrito).map((key) => (
            <div key={carrito[key].id} className="flex justify-center p-2">
              <article className="border bg-white border-gray-200 p-4 rounded-md shadow-md flex items-center">
                <img src={carrito[key].img} className="w-10 h-10 mr-2" alt={carrito[key].name} />
                <div>
                  <h3 className="text-sm font-semibold">{carrito[key].name}</h3>
                  <p>Cantidad: {carrito[key].cantidad}</p>
                  <p className="text-gray-600 text-xs">Precio: {carrito[key].price} {carrito[key].currency}</p>
                </div>
              </article>
            </div> 
          ))} 
          <p className="text-lg font-bold text-center text-black">Precio Total: {calcularPrecioTotal()} USD</p>
          <button 
            onClick={vaciarCarrito} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded block mx-auto mb-4">
            Vaciar Carrito
          </button>

          <form className="mx-auto max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-gray-800 text-2xl font-bold mb-4 text-center">Formulario de Envío</h2>
            <div className="mb-4">
              <input type="text" placeholder="Nombre" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Apellido" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Dirección" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Telefono" title="Debe tener 10 dígitos" className="mb-2 p-2 border border-gray-300 rounded-md bg-gray-100 w-full" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto">Finalizar Compra</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Carrito;
