import React from "react";

const CartItem = ({ book, handleDelItem }) => {
  const { title, image, price, quantity, isbn13 } = book;
  // console.log(book);
  return (
    <div className="mb-4 flex items-center border border-stone-500 rounded-lg p-4">
      <img className="w-20 h-20" src={image} alt={title} />
      <div className="flex-grow">
        <p>{title}</p>
        <p>
          Price: <span className="text-amber-400">{price}</span>
        </p>
        <p>
          Quantity: <span className="text-amber-400">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleDelItem(isbn13)} className="btn btn-primary">
        Delete
      </button>
    </div>
  );
};

export default CartItem;
