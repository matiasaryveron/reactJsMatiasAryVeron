import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Main/>
    <Footer />
    </BrowserRouter>
)
}
export default App
