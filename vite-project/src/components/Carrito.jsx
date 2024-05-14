import React, { useContext } from 'react';
import { contexto } from '../contexto.jsx';
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
      {carrito.length === 0 ? (
        <h3 className="text-gray-800 text-xl font-semibold text-center mb-4 p-4 border border-gray-300 rounded-md">CARRITO VACÍO</h3>
      ) : (
        <div>
          {carrito.map((item) => {
            return (
              <div key={item.id} className="flex justify-center p-2">
                <article className="border border-gray-200 p-4 rounded-md shadow-md flex items-center">
                  <img src={item.img} className="w-10 h-10 mr-2" alt={item.name} />
                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p>Cantidad: {item.cantidad}</p>
                    <p className="text-gray-600 text-xs">Precio: {item.price} {item.currency}</p>
                  </div>
                </article>
              </div>
            );
          })}
          <form className="mx-auto max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-gray-800 text-2xl font-bold mb-4 text-center">Formulario de Envío</h2>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto">Finalizar Compra</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Carrito;
