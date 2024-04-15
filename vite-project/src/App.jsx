import {BrowserRouter} from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemList from "./components/ItemList.jsx"


function App() {
  <BrowserRouter/>
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar />
    <ItemList/>
    
    </>
  )
}
export default App
