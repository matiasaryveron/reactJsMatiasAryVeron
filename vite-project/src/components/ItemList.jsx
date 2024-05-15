import React from 'react'
import CardProduct from './CardProduct.jsx'
import Inicio from './Inicio.jsx'
function ItemList({products}) {
  return (
    <>
    <Inicio></Inicio>
    <h1>{products.product}</h1>
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
{products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </section>
    </>
  )
}

export default ItemList