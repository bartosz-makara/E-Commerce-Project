import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Basket from "../components/Basket";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category?._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />);
  };

  return (
    <div className="">
      <Head>
        <title>my website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Basket /> */}
      <main className="relative h-[75vh] md:h-[95vh] lg:h-[105vh]">
        <Landing />
      </main>
      <section className="relative min-h-screen bg-white">
        <div className="space-y-10 py-10">
          <h1 className="text-center text-4xl font-light tracking-wide text-black md:text-5xl">
            Products
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-lg py-3 px-5 text-sm font-light shadow-md outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[white] text-black"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              {/* <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-fd6bae44-8bdb-42b1-b9c2-3c4e6bbbe977"></div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};
