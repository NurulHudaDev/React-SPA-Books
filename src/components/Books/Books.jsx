import React, { useEffect, useState } from 'react';
import Book from '../Book/Book.jsx';
import Cart from '../Cart/Cart.jsx';
import './Books.css'
const Books = () => {

  const [books, SetBooks] = useState([])
  const [carts, setCart] = useState([])
  console.log(carts);

  const handelAddToBookCart = (book) => {
    const newCart = [...carts, book]
   // if(newCart)
    setCart(newCart);
  };
  
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetBooks(data))
    }, [])
    
  const removeCart = () => {
       setCart([]);
  }
  
  const chooseOneBook = () => {
    const newCart = [...carts]
    let randomItems = newCart[Math.floor(Math.random() * newCart.length)]
    const { name } = randomItems;
    alert(name);
     setCart([]);
  }
   
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="row my-5">
            {books.map((book) => (
              <Book
                book={book}
                key={book.id}
                handelAddToBookCart={handelAddToBookCart}
              ></Book>
            ))}
          </div>
        </div>
        <div className="col-6 col-md-4 col-12 cart-bg">
          <h3 className="my-5">select Books: {carts.length}</h3>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id}></Cart>
          ))}

          {/* remove button and add button */}

          
          <button onClick={chooseOneBook}  className="ms-2 remove-btn">CHOOSE 1 FOR ME </button>
          <br />
          <br />
          <button onClick={removeCart} className="ms-2 remove-btn">
            CHOOSE AGAIN
          </button>
        </div>
      </div>
    );
};

export default Books;