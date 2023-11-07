import Navbar from "../Fragments/Navbar";
import Hero from "../Fragments/Hero";
import Brands from "../Fragments/Brands";
import ProductsPanel from "../Fragments/ProductsPanel";

import { heroData } from "../../constants/pagesData";
import { products } from "../../constants/productData";
import Ln from "../Elements/Line";
const HomeLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Hero
        tittle={heroData.tittle}
        text={heroData.text}
        stats={heroData.stats}
        img={heroData.img}
      />
      <Brands />
      <section className="py-2">
        <ProductsPanel tittle="new arrivals" productList={products} />
        <Ln />
        <ProductsPanel tittle="top selling" productList={products} />
      </section>
    </div>
  );
};

export default HomeLayout;
