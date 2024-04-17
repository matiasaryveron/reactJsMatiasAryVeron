import React from 'react'

function Consola({product}) {
  return (
    (
        product.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
            <p>{product.product}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.stock > 0 ? 'Stock Disponible' : 'Sin Stock'}</p>
            <Button>Comprar</Button>
          </div>
        ))
      ) 
  )
}

export default Consola