import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx"



function Navbar() {
    return(
      <>
      
    <header className="flex justify-between p-4 shadow-md bg-blue-800">
        <h1 className="text-slate-200 text-2xl text-center ">Tienda</h1>
        <nav className="items-center hidden md:flex md:gap-4 text-slate-200 justify-center">
          <Link to="/" className= "transition ease-in-out delay-150 hover:scale-110  duration-300 rounded hover:rounded-lg">Inicio</Link>
          <Link to="productos" className= "transition ease-in-out delay-150 hover:scale-110  duration-300 rounded hover:rounded-lg">Productos</Link>
          <Link to="category/juegos" className= "transition ease-in-out delay-150 hover:scale-110 duration-300 rounded hover:rounded-lg">Juegos</Link>
          <Link to="category/consolas" className= "transition ease-in-out delay-150 hover:scale-110 duration-300 rounded hover:rounded-lg">Consolas</Link>
          <CartWidget />
        </nav>
      </header>
      </>
    )
}
export default Navbar
