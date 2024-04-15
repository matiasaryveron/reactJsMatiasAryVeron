import React from 'react'
import { Button } from "antd";

function CardProduct(props) {
  return (
    <div className="user-card">
        <img src="" alt="" />
        <li>{props.product}</li>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <Button>Agregar</Button>
    </div>
  )
}

export default CardProduct