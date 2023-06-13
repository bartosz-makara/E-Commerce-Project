import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
// import Currency from "react-currency-formatter";

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const popup = () => {
    setShowPopup(!showPopup);
    function close() {
      setShowPopup(showPopup);
    }
    setTimeout(function () {
      close();
    }, 3000);
  };

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="relative flex h-fit w-[320px] select-none flex-col space-y-3 rounded-lg bg-white p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-black md:text-2xl">
          <p>{product.title}</p>
          <p className="text-lg md:text-xl">
            {product.currency}
            {product.price}
          </p>
        </div>
        {session ? (
          <div
            className="flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-black bg-white from-[#800080] to-red-500 text-black hover:bg-gradient-to-br hover:text-white hover:transition-all md:h-[70px] md:w-[70px]"
            onClick={addItemToBasket}
          >
            <ShoppingCartIcon className="h-5 w-5 md:h-8 md:w-8" />
          </div>
        ) : (
          <div
            className="flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg bg-gray-200 text-black text-opacity-[.6] hover:bg-gradient-to-br hover:text-opacity-[.4] hover:transition-all md:h-[70px] md:w-[70px]"
            onClick={popup}
          >
            <ShoppingCartIcon className="h-5 w-5 md:h-8 md:w-8" />
          </div>
        )}
      </div>
      <div
        className={`z-100 absolute left-[150px] bottom-[100px] h-24 w-[210px] rounded-xl bg-black bg-opacity-[.7] px-3 ${
          showPopup ? "" : "hidden"
        }`}
        onClick={() => setShowPopup(!showPopup)}
      >
        <p className="mt-3 text-center text-sm text-white">
          You'll be able to add products to basket once you're logged in!
        </p>
      </div>
    </div>
  );
};

export default Product;
