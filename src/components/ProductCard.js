import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
    <img src={product.image} alt="productImg" />
    </div>
  )
}

export default ProductCard;