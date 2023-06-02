import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <h2>
        <button onClick={() => handleNavigate("/")}>Blog</button>
      </h2>
      <ul className="fundo">
        <li>
          <button onClick={() => handleNavigate("/login")}>Mod</button>
        </li>
        <li>
          <button
            className="newbtn"
            onClick={() => handleNavigate("/new")}
          >
            New Post
          </button>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Outros componentes e rotas aqui */}
    </Router>
  );
};

export default App;
