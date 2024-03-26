import CartWidget from "./CartWidget.jsx"
import ItemListContainer from "./ItemListContainer.jsx"


function Navbar() {
    return(
      <>
      {/* Barra de navegacion */}
    <header className="flex justify-between p-4 shadow-md bg-blue-800">
        <h1 className="text-slate-200 text-2xl text-center ">Tienda</h1>
        <nav className="items-center hidden md:flex md:gap-4 text-slate-200">
          <a href="" className= "transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 rounded hover:rounded-lg">Inicio</a>
          <a href="" className= "transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 rounded hover:rounded-lg">Juegos</a>
          <a href="" className= "transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 rounded hover:rounded-lg">Consola</a>
          <a href="" className= "transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 rounded hover:rounded-lg">Accesorios</a>
          <CartWidget />
        </nav>
      </header>
      {/* Comienzo de pagina */}
      <section>
      <ItemListContainer greeting="Bienvenido a la Tienda"></ItemListContainer>
      </section>


      </>
    )
}
export default Navbar
