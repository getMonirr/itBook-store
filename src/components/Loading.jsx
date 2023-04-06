import React from "react";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-170px)] flex flex-col justify-center items-center">
      <div className="flex text-5xl gap-2 text-amber-200">
        <p>L</p>
        <div className="h-10 w-10 rounded-full border-4 border-red-100 border-dashed animate-spin mt-2"></div>
        <p>ading</p>
      </div>
    </div>
  );
};

export default Loading;
