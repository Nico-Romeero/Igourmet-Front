import React from "react";

function CartIcon() {
  const itemsQty = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <div className="carrito-icono">
    <i className="icono-carrito"></i> 
    {itemsQty > 0 && (
      <span className="cantidad">{itemsQty}</span> 
    )}
  </div>
  );
}

export default CartIcon;
