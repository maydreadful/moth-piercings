import React from 'react'

export default function ProductsList({products}) {
  return(
<div className="products-list" > 
    {products.map((product) => (
      <Product key={product.id} {...product} />
  ))}
  </div>
    
  );   
}
