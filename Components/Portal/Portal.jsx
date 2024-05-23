import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../Portal/Porta.css" 

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.Onclose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
  
const portals = document.getElementById("Cartportal");

const CartPortal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop Onclose={props.Onclose} />, portals)}
   
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default CartPortal;
