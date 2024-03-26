import React from 'react'

function ItemListContainer(props) {
  return (
    <div>
        <h2 className='text-6xl text-start py-10'>{props.greeting}</h2>
    </div>
  )
}

export default ItemListContainer