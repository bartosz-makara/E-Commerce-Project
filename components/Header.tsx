import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LogoutIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);
  const router = useRouter();

  return (
    <header>
      <div className="flex items-center justify-center space-x-3 bg-[black] p-2 pl-6 text-sm text-[white]">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          showArrows={false}
        >
          <p>This is not a real store</p>
          <p>This is not a real store</p>
        </Carousel>
      </div>
      {/* top nav */}
      <div className="m-5 flex flex-grow items-center py-2">
        <div className=" flex flex-grow items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/retuo3.svg"
            width={130}
            height={30}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden h-10 flex-grow items-center rounded-md sm:flex">
          {/* <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" /> */}
        </div>

        {/* right */}
        <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-black">
          {!session ? (
            <div
              onClick={() => signIn()}
              className="flex items-center text-sm font-medium"
            >
              <UserIcon className="h-7 md:h-8" />
              <p className="hidden cursor-pointer hover:underline md:inline">
                {"Sign In"}
              </p>
            </div>
          ) : (
            <div
              onClick={() => signOut()}
              className="flex items-center text-sm font-medium"
            >
              <LogoutIcon className="mr-2 h-7 md:h-8" />
              <p className="hidden cursor-pointer hover:underline md:inline">
                {`Sign out ${session.user?.name}`}
              </p>
            </div>
          )}

          <div
            onClick={() => router.push("/checkout")}
            className="relative flex cursor-pointer items-center"
          >
            {items.length > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#800080] text-center font-bold text-white md:right-10">
                {items.length}
              </span>
            )}

            <ShoppingCartIcon className="h-7 md:h-8" />
            <p className="font-regular mt-2 hidden hover:underline md:inline md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
