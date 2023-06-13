import Image from "next/image";
import Button from "./Button";

const Landing = () => {
  return (
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
            <Button
              title="Check source code"
              href="https://github.com/bartosz-makara/E-Commerce-Project"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 sm:visible md:inline lg:h-[450px] lg:w-[600px]">
        <Image src="/macb.jpg" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};

export default Landing;
