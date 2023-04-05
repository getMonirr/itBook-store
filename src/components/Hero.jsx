import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-between gap-8 container mx-auto items-center min-h-[calc(100vh-170px)]">
      <div>
        <div className="space-y-4">
          <p className="bg-[#facc15]  px-4 uppercase font-semibold text-xs rounded-full text-black inline-block">
            on sale
          </p>
          <h2 className="font-bold text-4xl text-white w-[492px]">
            A reader lives a thousand lives{" "}
            <span className="text-[#facc15]">before he dies</span>
          </h2>
          <p className="w-[450px] mb-8">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div>
          <Link to="/books">
            <button className="btn inline-flex gap-2 bg-[#facc15] text-black hover:bg-black hover:text-[#facc15] group/item">
              Visit Store
              <ShoppingCartIcon className="w-6 h-6 text-gray-900 group-hover/item:text-[#facc15]" />
            </button>
          </Link>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <Lottie animationData={reader} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
