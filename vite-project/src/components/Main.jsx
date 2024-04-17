import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import Consolas from './Consolas'
import Contactos from './Contactos'
import Juegos from './Juegos'
import ConsolaContainer from './ConsolaContainer'

function Main() {
  return (
    <main className='p-4 text-black grow mi-main bg-white'>
 <Routes>

<Route path='/' element={<ItemListContainer/>} />

<Route path='/consols' element={<Consolas/>} />

<Route path= '/:id' element={<ConsolaContainer/>} />

<Route path='/games' element={<Juegos/>} />

<Route path='/contact' element={<Contactos/>} />

<Route path="*" element={<p>No encontrado</p>} />

</Routes>






    </main>
  )
}

export default Main