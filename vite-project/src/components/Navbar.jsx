import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MenuOutlined } from '@ant-design/icons';
import CartWidget from "./CartWidget.jsx";
import { contexto } from "../contexto.jsx";



function Navbar() {

    const elValorDelContexto = useContext(contexto)

    const [verProductosMenu, setVerProductosMenu] = useState(false);

    const mostrarProductosMenu = () => {
        setVerProductosMenu(!verProductosMenu);
    };

    const cerrarProductosMenu = () => {
        setVerProductosMenu(false);
    };

    return (
        <>
            <header className="flex justify-between p-4 shadow-md bg-blue-800">
                <div className="flex items-center">
                    <h1 className="text-slate-200 text-2xl">Tienda</h1>
                </div>
                <nav className="items-center hidden md:flex md:gap-4 text-slate-200 justify-center">
                    <Link to="/" className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded hover:rounded-lg">Inicio</Link>
                    <div className="relative">
                        <button onClick={mostrarProductosMenu} className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded hover:rounded-lg">Productos</button>
                        {verProductosMenu && (
                            <div className="absolute mt-2 w-36 bg-white rounded-md shadow-md z-10">
                                <Link to="category/juegos" onClick={cerrarProductosMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Juegos</Link>
                                <Link to="category/consolas" onClick={cerrarProductosMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Consolas</Link>
                            </div>
                        )}
                    </div>
                    <CartWidget />
                </nav>
                <button onClick={mostrarProductosMenu} className="text-white md:hidden">
                    <MenuOutlined />
                </button>
            </header>
            {verProductosMenu && (
                <div className="md:hidden bg-blue-800">
                    <Link to="/" onClick={cerrarProductosMenu} className="block py-2 px-4 text-white">Inicio</Link>
                    <Link to="category/juegos" onClick={cerrarProductosMenu} className="block py-2 px-4 text-white">Juegos</Link>
                    <Link to="category/consolas" onClick={cerrarProductosMenu} className="block py-2 px-4 text-white">Consolas</Link>
                </div>
                
            )}
        </>
    );
}

export default Navbar;

