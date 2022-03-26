import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
  const { name, img } = cart; 
  return (
    <div className="d-flex ms-2 my-2 cart">
      <img style={{ width: "50px", height: "50px" }} src={img} alt="" />
      <h6 className="my-auto mx-2">{name}</h6>
      <p className="btn-hero my-auto">
        <FontAwesomeIcon icon={faTrash} />
         </p>
    </div>
  );
};

export default Cart;