import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FloatButton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'; // Importa el icono de carrito de Ant Design
import ItemListContainer from './ItemListContainer';
import Productos from './Productos';
import ConsolaContainer from './ConsolaContainer';
import Carrito from './Carrito';

function Main() {
  return (
    <main className='p-4 text-black grow mi-main bg-gray-300'>
      <Link to="/cart">
      <FloatButton 
          icon={<ShoppingCartOutlined className="text-blue-800 " />} 
          className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 w-12 h-12" 
        />  
      </Link>
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='item/:id' element={<ConsolaContainer />} />
        <Route path='category/:id' element={<ItemListContainer />} />
        <Route path='/cart' element={<Carrito />} />
        <Route path="*" element={<p>No encontrado</p>} />
      </Routes>

      <br />
      <img src="https://puppis.vteximg.com.br/arquivos/banner-envio-al-interior-desktop-2100x190.png?v=637751887487570000" alt="envio" />
    </main>
  );
}

export default Main;
