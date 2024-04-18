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
      <img src="https://puppis.vteximg.com.br/arquivos/banner-envio-al-interior-desktop-2100x190.png?v=637751887487570000" alt="envio" />
 <Routes>

<Route path='/' element={<ItemListContainer/>} />

<Route path='/productos' element={<Productos/>} />

<Route path= 'item/:id' element={<ConsolaContainer/>} />

<Route path='category/:id' element={<ItemListContainer/>} />

{/* <Route path='category/consolas' element={<Consolas/>} /> */}

<Route path="*" element={<p>No encontrado</p>} />

</Routes>






    </main>
  )
}

export default Main