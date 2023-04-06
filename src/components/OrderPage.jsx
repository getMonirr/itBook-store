import React from "react";

const OrderPage = ({ bookCart }) => {
  let totalBook = 0;
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
    50
  ).toFixed(2);
  return (
    <div className="bg-slate-900 p-4 space-y-6 sticky top-16">
      <h3 className="font-bold text-xl text-blue-300">
        Total Book: {totalBook}{" "}
      </h3>
      <div>
        <p>Total Price: ${total.toFixed(2)}</p>
        <p>Tax: ${tax}</p>
        <p>Shipping Charge: ${50} (fixed)</p>
      </div>

      <p className="text-2xl text-white font-extrabold">
        Grand Total: ${grandTotal}
      </p>
    </div>
  );
};

export default OrderPage;
