import { Link } from "react-router-dom";

import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className ="navbar">
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/mod`}>Mod</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">
                    Novo Post
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar