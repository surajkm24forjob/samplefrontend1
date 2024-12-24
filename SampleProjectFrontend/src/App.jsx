
import './App.css'
import Cards from './components/cards'
import Hero from './components/Hero.jsx'
import Mainsection from './components/Mainsection'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div className="MainMap">
    <Navbar/>
      <Hero/>
     <Mainsection/>
     <Cards/> 
    </div>
       </>
  )
}

export default App
