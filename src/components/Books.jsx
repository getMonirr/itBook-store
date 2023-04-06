import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  // console.log(books);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
      {books.map((book) => (
        <Book key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
