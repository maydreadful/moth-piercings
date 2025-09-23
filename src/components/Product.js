import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ id, image, name, rate, price}) {
  return (
<div className="product">
    <img src={image} alt={name} />
    <p className="name">{name}</p>
    <p className="rate">{rate}</p>
    <p className="price">R$ {price}<span>MZn</span>
    </p>

    <div className="buttons">
        <Link to="/product/123/checkout" className="btn-icon" >
        <span>Comprar Agora</span>
        <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button className="btn-icon add-to-cart-btn">
        <span>Adicionar ao Carrinho</span>
        <FontAwesomeIcon icon={faCartShopping} />
        </button>
    </div>
    </div>
  );  
}
