import React from 'react'

function CartProductTile({ product }) {
  return (
    <div>{product.product.name}</div>
  )
}

export default CartProductTile