import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    //inserção dos componentes definidos no main "Outlet"
    <div className="App">
      <Navbar />
      <div className = "container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
