import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import Productos from './Productos'
import Consolas from './Consolas'
import Juegos from './Juegos'
import ConsolaContainer from './ConsolaContainer'

function Main() {
  return (
    <main className='p-4 text-black grow mi-main bg-white'>
 <Routes>

<Route path='/' element={<ItemListContainer/>} />

<Route path='/consols' element={<Productos/>} />

<Route path= '/:id' element={<ConsolaContainer/>} />

<Route path='/games' element={<Juegos/>} />

<Route path='/contact' element={<Consolas/>} />

<Route path="*" element={<p>No encontrado</p>} />

</Routes>






    </main>
  )
}

export default Main