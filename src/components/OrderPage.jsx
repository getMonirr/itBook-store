import React from "react";
import { Link } from "react-router-dom";

const OrderPage = ({ bookCart, handleClearCart }) => {
  let totalBook = 0;
  const shippingCharge = bookCart.length ? 50 : 0;
  for (const book of bookCart) {
    totalBook += book.quantity;
  }
  const total = bookCart.reduce(
    (acc, cur) => acc + parseFloat(cur.price.split("$")[1]) * cur.quantity,
    0
  );
  const tax = ((total * 10) / 100).toFixed(2);

  const grandTotal = (
    parseFloat(total.toFixed(2)) +
    parseFloat(tax) +
    shippingCharge
  ).toFixed(2);

  return (
    <div className="bg-slate-900 p-4 space-y-6 sticky top-16">
      <h3 className="font-bold text-xl text-blue-300">
        Total Book: {totalBook}{" "}
      </h3>
      <div>
        <p>Total Price: ${total.toFixed(2)}</p>
        <p>Tax: ${tax}</p>
        <p>
          Shipping Charge: ${shippingCharge}{" "}
          {shippingCharge !== 0 ? "(Fixed)" : ""}
        </p>
      </div>

      <p className="text-2xl text-white font-extrabold">
        Grand Total: ${grandTotal}
      </p>
      <div>
        <button className="btn btn-primary w-full" onClick={handleClearCart}>
          Clear Cart
        </button>
        <Link to="/review-order">
          <button className="btn btn-primary w-full mt-5">Review Order</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
