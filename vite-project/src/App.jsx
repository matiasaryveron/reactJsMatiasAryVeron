import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import { Home } from "lucide-react"
import Footer from "./components/Footer.jsx"


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Home />
    <Footer />
    </BrowserRouter>
)
}
export default App
