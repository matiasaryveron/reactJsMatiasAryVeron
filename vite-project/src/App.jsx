import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import CarritoProvider from "./contexto.jsx"


function App() {
  
  return (
    <BrowserRouter>
    <CarritoProvider>
    <Navbar />
    <Main/>
    <Footer />
    </CarritoProvider>
    </BrowserRouter>
)
}
export default App
