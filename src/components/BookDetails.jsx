import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const {
    title,
    image,
    desc,
    price,
    language,
    authors,
    publisher,
    year,
    rating,
  } = book;
  console.log(book);
  return (
    <div className="container mx-auto w-2/3 items-center border border-gray-500 rounded-lg my-10">
      <div style={{alignItems: 'center'}} className="card lg:card-side bg-base-100 shadow-xl items-center justify-center">
        <figure className="w-1/2">
          <img src={image} alt={title} />
        </figure>
        <div className="card-body w-1/2 space-y-4">
          <h2 className="bg-[#facc15]  px-4 uppercase font-semibold text-xs rounded-full text-black inline-block w-28 text-center">
            brand new
          </h2>
          <h2 className="card-title text-4xl text-white">{title}</h2>
          <div>
            <p>Authors: {authors} </p>
            <p>Publisher: {publisher} </p>
            <p>Year: {year} </p>
            <p>Rating: {rating} </p>
          </div>
          <h4>{desc}</h4>
          <div className="card-actions items-center gap-8">
            <button className="btn btn-primary">Buy Now</button>
            <p className="text-white font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
