import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OrderPage from "./OrderPage";
import CartItem from "./CartItem";

const ReviewOrder = () => {
  const { newBookCart } = useLoaderData();
  const [cart, setCart] = useState(newBookCart);

  return (
    <div className="grid grid-cols-4 container mx-auto my-16 gap-20">
      <div className="col-span-3">
        {cart.map((bk) => (
          <CartItem key={bk.isbn13} book={bk} />
        ))}
      </div>
      <div>
        <OrderPage bookCart={cart} />
      </div>
    </div>
  );
};

export default ReviewOrder;
