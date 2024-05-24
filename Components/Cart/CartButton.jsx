import React from "react";
import "../Cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Auth/Auth";

export default function CartButton() {
  const dispatch = useDispatch();
  const sendingCart = useSelector((state) => state.Addingcart.cartitems);

  const cartItemCount = Array.isArray(sendingCart) ? sendingCart.length : 0;

  const ToggleCart = () => {
    dispatch(toggle());
  };

  return (
    <div className="cart-button" onClick={ToggleCart}>
      <button className="cart-button__btn">
        <span className="cart-button__text">My Cart</span>
        <span className="cart-button__count">{cartItemCount}</span>
      </button>
    </div>
  );
}
