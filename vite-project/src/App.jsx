import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
      <main>
        <h2>Home</h2>
      </main>
<Footer/>
    </>
  )
}

export default App
