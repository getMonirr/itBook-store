import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OrderPage from "./OrderPage";
import CartItem from "./CartItem";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";

const ReviewOrder = () => {
  const { newBookCart } = useLoaderData();
  const [cart, setCart] = useState(newBookCart);

  // handle item delete
  const handleDelItem = (id) => {
    const restBook = cart.filter((bk) => bk.isbn13 !== id);
    setCart(restBook);
    removeFromDb(id);
  };

  // handle clear cart
  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  return (
    <div className="grid grid-cols-4 container mx-auto my-16 gap-20">
      <div className="col-span-3">
        {cart.map((bk) => (
          <CartItem handleDelItem={handleDelItem} key={bk.isbn13} book={bk} />
        ))}
      </div>
      <div>
        <OrderPage handleClearCart={handleClearCart} bookCart={cart} />
      </div>
    </div>
  );
};

export default ReviewOrder;
