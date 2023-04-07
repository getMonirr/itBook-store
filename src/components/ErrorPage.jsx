import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { statusText, data, status } = useRouteError();
  return (
    <div className="h-[calc(100vh-170px)] my-16 bg-amber-400 text-slate-600 flex justify-center items-center flex-col gap-8">
      <p className="text-4xl font-bold">{status}</p>
      <p>{data}</p>
      <p>
        <span className="text-primary">Status:</span> {statusText}
      </p>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
