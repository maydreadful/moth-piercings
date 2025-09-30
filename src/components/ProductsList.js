import React from 'react'
import Product from './Product'; // ajuste o caminho conforme o local do arquivo Product.js

export default function ProductsList({products}) {
  return(
<div className="products-list" > 
    {products.map((product) => (
      <Product key={product.id} {...product} />
  ))}
  </div>
    
  );   
}
