import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Loading from "./Loading";
import OrderPage from "./OrderPage";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../utilities/fakedb";

const Books = () => {
  const [bookCart, setBookCart] = useState([]);

  const { books } = useLoaderData();
  const { state } = useNavigation();

  if (state === "loading") {
    return <Loading />;
  }

  // handle add to cart

  const updateBookCart = (shoppingCart) => {
    const newBookCart = [];
    for (const id in shoppingCart) {
      const addedBook = books.find((bk) => bk.isbn13 === id);
      if (addedBook) {
        addedBook.quantity = shoppingCart[id];
        newBookCart.push(addedBook);
      }
    }
    setBookCart(newBookCart);
  };
  const handleAddToCart = (id) => {
    addToDb(id);
    const shoppingCart = getShoppingCart();
    // console.log(shoppingCart);
    updateBookCart(shoppingCart);
  };
  useEffect(() => {
    const shoppingCart = getShoppingCart();
    // console.log(shoppingCart);
    updateBookCart(shoppingCart);
  }, []);

  // handleClearCart
  const handleClearCart = () => {
    deleteShoppingCart();
    setBookCart([]);
  };
  return (
    <div className="lg:grid grid-cols-5 container mx-auto gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto my-16 col-span-4">
        {books.map((book) => (
          <Book
            key={book.isbn13}
            book={book}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="my-16">
        <OrderPage bookCart={bookCart} handleClearCart={handleClearCart} />
      </div>
    </div>
  );
};

export default Books;
