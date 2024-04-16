import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import ItemListContainer from "./components/ItemListContainer.jsx"


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <ItemListContainer/>
    </BrowserRouter>
)
}
export default App
