import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <h1 className="logo">
            Moth<span>Piercings</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/produtos">Products</Link>
              </li>
              <li>
                <Link to="/sobre">About</Link>
              </li>
              <li>
                <Link to="/contato">Contact</Link>
              </li>
              <li>
                <Link to="/conta">Conta</Link>
              </li>
              <li>
                <Link to="/carrinho">Cart</Link>
              </li>
            </ul>
          </nav>

          <div className="navs-icon-container">
            <div className="search-input-container">
              <input type="search" />
              <FontawesomeIcon icon={faSearch} />
            </div>
            <button className="shopping-cart">
              <FontawesomeIcon icon={faShoppingCart} />
              <div className="products-count">0</div>
            </button>
            <button className="menu-button">
              <FontawesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
