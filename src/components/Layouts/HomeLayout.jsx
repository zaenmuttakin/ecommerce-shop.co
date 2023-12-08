import { Fragment } from "react";
import Hero from "../Fragments/Hero";
import Brands from "../Fragments/Brands";
import ProductsPanel from "../Fragments/ProductsPanel";
import StylePanel from "../Fragments/StylePanel";
import CustPanel from "../Fragments/CustomerPanel";

import { heroData } from "../../constants/pagesData";
import { products } from "../../constants/productData";
import Ln from "../Elements/Line";
const HomeLayout = () => {
  const productSlices = products.slice(0, 5);
  const productSlices2 = products.slice(6, 11);
  return (
    <Fragment>
      <Hero
        tittle={heroData.tittle}
        text={heroData.text}
        stats={heroData.stats}
        img={heroData.img}
      />
      <Brands />
      <section className="py-2">
        <ProductsPanel tittle="new arrivals" productList={productSlices} />
        <Ln />
        <ProductsPanel tittle="top selling" productList={productSlices2} />
      </section>
      <StylePanel />
      <CustPanel />
    </Fragment>
  );
};

export default HomeLayout;
