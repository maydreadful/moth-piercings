import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function Navbar() {
const [show, setShow] = useState(false);

  return (
      <div className="nav">
          <div className="inner-content">
          <h1 className="logo">
            Moth<span>Piercings</span>
          </h1>
         
          <nav className={`${show && "show"}`}>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
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
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <button className="shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="products-count">0</div>
            </button>
            <button className="menu-button" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        </div>
  )
}
