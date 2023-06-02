import Navbar from './components/Navbar';
import './style/App.css'
import MainRoutes from './routes/routes';


function App() {
  return (
    //inserção dos componentes definidos no main "Outlet"
    <div className="App">
      <Navbar />
      <div className = "container">
        <MainRoutes />
      </div>
    </div>
  )
}

export default App
