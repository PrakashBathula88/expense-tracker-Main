import React from "react";
import CartPortal from "../Portal/Portal";
export default function Cartitemlist() {
  return (
    <div>
      <CartPortal>
        <h1 style={{ fontSize: "80px", color: "red" }}>CartItem list</h1>
      </CartPortal>
    </div>
  );
}
