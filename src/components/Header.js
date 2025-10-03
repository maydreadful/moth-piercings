import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
          <img 
            src="/images/header-image.png" 
            alt="Close-up of a person displaying multiple piercings with a confident expression, set against a softly lit background that conveys a welcoming and stylish atmosphere. Text on the image reads Piercings frase de impacto." 
          />
        </div>
      </div>
    </header>
  );
}
