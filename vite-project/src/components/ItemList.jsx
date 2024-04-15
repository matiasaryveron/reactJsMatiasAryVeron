import React from 'react'
import CardProduct from './CardProduct.jsx'

function ItemList() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
    </section>
  )
}

export default ItemList