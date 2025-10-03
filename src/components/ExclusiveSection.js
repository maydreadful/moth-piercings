import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Piercing Teia de Aranha</h2>
            <p>
              O Piercing Labret Teia de Aranha é produzido em Titânio,
               o material mais biocompatível com o nosso corpo. 
               Conta com um topo em formato de teia de aranha e o ...
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/sembg-product-4-removebg-preview.png" alt="piercing teia" />
          </div>
        </div>
      </div>
    </div>
  );
}