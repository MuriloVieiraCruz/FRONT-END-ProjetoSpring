import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

  const Navbar = () => {

  return (
    <nav className="navbar">
      <h2>
        <a className="btnBlog" href="/">Blog</a>
      </h2>
      <ul className="fundo">
        <li>
          <a className="btnBlog" href="/login">Mod</a>
        </li>
        <li>
          <a
            className="newbtn"
            href="/new"
          >
            New Post
          </a>
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
