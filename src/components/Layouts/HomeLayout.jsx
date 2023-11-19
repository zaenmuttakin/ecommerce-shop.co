import { Fragment } from "react";
import Navbar from "../Fragments/Navbar";
import Hero from "../Fragments/Hero";
import Brands from "../Fragments/Brands";
import ProductsPanel from "../Fragments/ProductsPanel";
import StylePanel from "../Fragments/StylePanel";
import CustPanel from "../Fragments/CustomerPanel";
import Footer from "../Fragments/Footer";

import { heroData } from "../../constants/pagesData";
import { products } from "../../constants/productData";
import Ln from "../Elements/Line";
const HomeLayout = () => {
  return (
    <Fragment>
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
      <StylePanel />
      <CustPanel />
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
