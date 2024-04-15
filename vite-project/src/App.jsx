import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import ItemList from "./components/ItemList.jsx"


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <ItemList/>
    </BrowserRouter>
)
}
export default App
