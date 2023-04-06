import React from "react";

const CartItem = ({ book }) => {
  const { title, image, year, rating, publisher } = book;
  return (
    <div className="mb-4 flex items-center border border-stone-500 rounded-lg p-4">
      <img className="w-20 h-20" src={image} alt={title} />
      <div className="flex-grow">
        <p>{title}</p>
        <p>Publisher: {publisher}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
      </div>
      <button className="btn btn-primary">d</button>
    </div>
  );
};

export default CartItem;
