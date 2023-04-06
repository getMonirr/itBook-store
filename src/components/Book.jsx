import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Loading from "./Loading";

const Book = ({ book }) => {
  const { title, subtitle, image, isbn13, price } = book;

  return (
    <Link to={`/books/${isbn13}`}>
      <div className="overflow-hidden relative shadow-lg group/item transition duration-200 transform hover:-translate-y-2">
        <div>
          <img
            className="mx-auto w-full h-96 object-fill origin-center rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="bg-black text-white absolute inset-0 bg-opacity-80 rounded-lg px-12 py-8 opacity-0 hover:opacity-100  transition duration-200 flex flex-col">
          <p> {title} </p>
          <br />
          <p>{subtitle}</p>
          <br />
          <p className="mt-auto">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
