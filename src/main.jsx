import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import BookDetails from "./components/BookDetails";
import Loading from "./components/Loading";
import ReviewOrder from "./components/ReviewOrder";
import { bookCartLoader } from "./Loader/bookCartLoader";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "review-order",
        element: <ReviewOrder />,
        loader: bookCartLoader,
      },
      {
        path: "/spin",
        element: <Loading />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
