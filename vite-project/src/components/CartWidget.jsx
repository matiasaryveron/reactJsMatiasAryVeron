import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { contexto } from '../contexto';
import { Link } from 'react-router-dom';

function CartWidget() {

  const { cantCarrito } = useContext(contexto);


  return (
    <>
    <Link to="/cart">
    <div>
      <ShoppingCartOutlined />
      <span>{cantCarrito}</span>
    </div>
    </Link>
    </>
  );
}

export default CartWidget;