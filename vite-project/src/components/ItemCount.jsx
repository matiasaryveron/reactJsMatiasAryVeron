import { useState } from "react";
import { Button } from "antd";
import Swal from 'sweetalert2';

function ItemCount(props) {

    const [numero, setNumero] = useState(1)

    const incrementar = () => {
        setNumero (numero + 1)
    }
    const decrementar = () => {
        setNumero (numero > 1 ? numero - 1 : 1)
    }
    const confirmar = () => {
        props.handleConfirm(numero)
        Swal.fire("¡Producto agregado!", "", "success");
    }
    return (
        <>
            <h2>Cantidad</h2>
            <div className="flex items-center justify-center">
                <Button onClick={incrementar} className="mr-2">+</Button>
                <p>{numero}</p>
                <Button onClick={decrementar} className="ml-2">-</Button>
            </div>
            <Button onClick={confirmar} size="large" className="mt-4 bg-blue-500 w-full text-white hover:bg-blue-700">Comprar</Button>
        </>
    )
    
}
export default ItemCount