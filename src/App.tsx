import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Menu />
      <About />
    </>
  )
}

export default App