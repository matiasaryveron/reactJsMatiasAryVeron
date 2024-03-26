import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

function CartWidget() {
  return (
    <div>
      <ShoppingCartOutlined />
      <span>0</span>
    </div>
  );
}

export default CartWidget;