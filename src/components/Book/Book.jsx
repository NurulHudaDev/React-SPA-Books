import React from 'react';
import './Book.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartShopping } from "@fortawesome/free-solid-svg-icons";
 
<FontAwesomeIcon icon="fa-solid fa-cart-shopping-fast" />;
const Book = ({ book, handelAddToBookCart }) => {
  //console.log(props);
  const { name, img, price,} = book;

  return (
    <div className="col my-2">
      <div className="books">
        <img src={img} alt="" />
        <div className="book-info">
          <h5>Name: {name}</h5>
          <p>Price: {price}</p>
        </div>
        <button onClick={() => handelAddToBookCart(book)
        } className="btn-cart">
          <p className="btn-cart-text my-2">Add To Cart</p>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Book;