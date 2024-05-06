import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { contexto } from '../contexto';
import ContadorComprar from './ContadorComprar';



function CartWidget() {

  const { cantCarrito } = useContext(contexto);


  return (
    <div>
      <ShoppingCartOutlined />
      <span>{cantCarrito}</span>
    </div>
  );
}

export default CartWidget;