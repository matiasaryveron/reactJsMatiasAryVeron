import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Inicio'
import Consolas from './Consolas'
import Contactos from './Contactos'
import Juegos from './Juegos'


function Main() {
  return (
    <main className='p-4 text-white grow mi-main bg-slate-600'>
 <Routes>

<Route path='/' element={<Home/>} />

<Route path='/consols' element={<Consolas/>} />

<Route path='/games' element={<Juegos/>} />

<Route path='/contact' element={<Contactos/>} />

<Route path="*" element={<p>No encontrado</p>} />

</Routes>






    </main>
  )
}

export default Main