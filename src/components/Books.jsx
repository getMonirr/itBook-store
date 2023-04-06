import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Loading from "./Loading";

const Books = () => {
  const { books } = useLoaderData();
  const { state } = useNavigation();

  if (state === "loading") {
    return <Loading />;
  }
  // console.log(books);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto my-16">
      {books.map((book) => (
        <Book key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
