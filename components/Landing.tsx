// import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollDown from "./ScrollDown";

const Landing = () => {
  return (
    // <div className="relative">
    //   <div className="w-full h-32 py-16 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
    //   <Carousel
    //     autoPlay
    //     infiniteLoop
    //     showStatus={false}
    //     showIndicators={false}
    //     showThumbs={false}
    //     interval={5000}
    //   >
    //     <div>
    //       <img loading="lazy" src="/banner8.png" alt="" />
    //     </div>

    //     <div>
    //       <img loading="lazy" src="/banner8.png" alt="" />
    //     </div>

    //     <div>
    //       <img loading="lazy" src="banner8.png" alt="" />
    //     </div>
    //   </Carousel>
    // </div>
    <section className="px-19 sticky top-12 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-10">
      <div className="space-y-9 px-6">
        <h1 className="font-regular space-y-2 text-3xl tracking-wide md:text-5xl lg:text-6xl">
          <span className="block">E-commerce</span>
          <span className="block h-14 bg-gradient-to-r from-[#800080] to-red-500 bg-clip-text font-semibold text-transparent md:h-16">
            playground
          </span>
        </h1>
        <h3 className="space-y-3 text-sm font-thin tracking-wide lg:text-xl">
          <span className="block">
            Little masterclass in common functionalities of an online store
          </span>
        </h3>
        <div className="relative flex justify-between space-x-9">
          <div>
            <Button title="Check source code" />
          </div>
          {/* <a className="link">Learn More</a> */}
          <ScrollDown />
        </div>
      </div>

      <div
        // id="hero"
        className="relative hidden h-[450px] w-[450px] transition-all duration-500 sm:visible md:inline lg:h-[450px] lg:w-[600px]"
      >
        <Image src="/macb.jpg" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};

export default Landing;
