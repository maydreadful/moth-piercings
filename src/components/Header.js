import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
    <div className="inner-content">
    <div className="left-side">
      <h2>Piercings frase de impacto</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque 
        aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
        </p>
        <Link to="/products">
        <span>Ver agora</span>
        <FontAwesomeIcon icon={faChevronRight} />
        </Link>
  </div>

    <div className="right-side"> 
      <img src="" alt="Product"></img>
    </div>
   </div>
  </header>
  );
}
