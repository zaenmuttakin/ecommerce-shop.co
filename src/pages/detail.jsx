import { useEffect, useState } from "react";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import StarRating from "../components/Elements/StarRating";
import { Usd } from "../components/Elements/Curency";
import Button from "../components/Elements/Button";
import { products } from "../constants/productData";
import CardProduct from "../components/Elements/CardProduct";
import SizeName from "../components/Elements/SizeName";
import { useParams } from "react-router-dom";
import DropList from "../components/Elements/DropList/DropList";
import Budge from "../components/Elements/Budge/Budge";
import useDatacart from "../hook/useDatacart";
import { useCartItems } from "../hooks/globalState/useCartItems";

// tabs content ↘↘↘
const TabProduct = () => {
  return (
    <div>
      <p className="tx-3 font-bold py-4 xl:py-8">Product Details</p>
      <p className="tx-2 mb-2 text-black-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum
        atque iste commodi amet. Ratione distinctio labore eius neque quas
        laborum veritatis, provident, eaque corporis quae recusandae ab beatae
        eum quos voluptatem, nisi officia optio architecto magni? Quas veritatis
        ea asperiores dolores numquam voluptate laborum atque nihil dolorem?
        Animi, atque!
      </p>
      <p className="tx-2 mb-2 text-black-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum
        atque iste commodi amet. Ratione distinctio labore eius neque quas
        laborum veritatis, provident, eaque corporis quae recusandae ab beatae
        eum quos voluptatem, nisi officia optio architecto magni? Quas veritatis
        ea asperiores dolores numquam voluptate laborum atque nihil dolorem?
        Animi, atque!
      </p>
    </div>
  );
};
const TabFaq = () => {
  return (
    <div>
      <p className="tx-3 font-bold py-4 xl:py-8">FAQs</p>
      <p className="tx-2 mb-2 text-black-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum
        atque iste commodi amet. Ratione distinctio labore eius neque quas
        laborum veritatis, provident, eaque corporis quae recusandae ab beatae
        eum quos voluptatem, nisi officia optio architecto magni? Quas veritatis
        ea asperiores dolores numquam voluptate laborum atque nihil dolorem?
        Animi, atque!
      </p>
      <p className="tx-2 mb-2 text-black-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum
        atque iste commodi amet. Ratione distinctio labore eius neque quas
        laborum veritatis, provident, eaque corporis quae recusandae ab beatae
        eum quos voluptatem, nisi officia optio architecto magni? Quas veritatis
        ea asperiores dolores numquam voluptate laborum atque nihil dolorem?
        Animi, atque!
      </p>
    </div>
  );
};
const TabReview = () => {
  const [sort, setSort] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center py-4 xl:py-8">
        <p className="tx-3 font-bold">
          All Reviews
          <span className="tx-2 font-normal ml-2">(2)</span>
        </p>
        <div className="flex gap-2 xl:gap-3 justify-end">
          <button className="p-3 flex items-center justify-center rounded-full bg-black-10 hover:bg-black-100 hover:text-white smooth">
            <i className="tx-3 font-bold ic-fliter" />
          </button>
          <div className="relative hidden xl:block">
            <button
              onClick={() => {
                setSort(!sort);
              }}
              className={`${
                sort ? "bg-black-100 text-white" : "bg-black-10"
              } py-3 px-4 flex gap-1 items-center justify-center rounded-full hover:bg-black-100 hover:text-white smooth`}
            >
              <p className="tx-2">Sort By</p>
              <i
                className={`${
                  sort && "rotate-180"
                } tx-3 ic-chevron transition-transform duration-300`}
              />
            </button>
            <DropList list={["Latest", "Longest"]} isOpen={sort} />
          </div>
          <button
            className={`py-3 px-6 tx-2 items-center justify-center rounded-full bg-black-100 text-white smooth`}
          >
            Write a Review
          </button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap xl:flex-nowrap mb-5 xl:mb-9">
        <div className="w-full xl:w-1/2 py-7 px-8 rounded-2xl border border-black-10 hover:border-black-40 smooth">
          <div className="flex justify-between items-center mb-3 xl:mb-4">
            <StarRating rating={5} styles={"scale-125"} />
            <i className="tx-3 ic-dots text-black-60 hover:text-black-100 cursor-pointer smooth" />
          </div>
          <p className="tx-2 font-bold mb-2 xl:mb-3">
            Samantha D.
            <span className="tx-2 text-white bg-green rounded-full p-0.5 ic-checklist ml-2" />
          </p>
          <div className="tx-2 text-black-60 mb-4 xl:mb-6">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            exercitationem animi assumenda fugiat consectetur! Necessitatibus
            odio repellendus porro doloremque dolorum.""
          </div>
          <p className="tx-2 text-black-60 font-medium">
            Posted on August 14, 2023
          </p>
        </div>
        <div className="w-full xl:w-1/2 py-7 px-8 rounded-2xl border border-black-10">
          <div className="flex justify-between items-center mb-3 xl:mb-4">
            <StarRating rating={5} styles={"scale-125"} />
            <i className="tx-3 ic-dots text-black-60 hover:text-black-100 cursor-pointer smooth" />
          </div>
          <p className="tx-2 font-bold mb-2 xl:mb-3">
            Samantha D.
            <span className="tx-2 text-white bg-green rounded-full p-0.5 ic-checklist ml-2" />
          </p>
          <div className="tx-2 text-black-60 mb-4 xl:mb-6">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            exercitationem animi assumenda fugiat consectetur! Necessitatibus
            odio repellendus porro doloremque dolorum.""
          </div>
          <p className="tx-2 text-black-60 font-medium">
            Posted on August 14, 2023
          </p>
        </div>
      </div>
      <Button
        type="secondary"
        label="load more reviews"
        styles="max-w-full mx-auto"
        icon="ic-arrow"
        to="/*"
      />
    </div>
  );
};
// tabs content ↗↗↗

const tabs = [
  {
    name: "Product Details",
    content: <TabProduct />,
  },
  {
    name: "Rating & Review",
    content: <TabReview />,
  },
  {
    name: "FAQs",
    content: <TabFaq />,
  },
];

const Images = ({ variant }) => {
  const [imgShow, setImgShow] = useState(0);

  return (
    <div className="images  flex-1 flex flex-col xl:flex-row gap-4">
      <div className="flex flex-nowrap flex-row xl:flex-col w-full xl:w-1/3 gap-4 order-2 xl:order-1">
        {variant.image.map((img, i) => (
          <div
            key={i}
            className="flex-1 w-1/3 xl:w-full aspect-square rounded-xl overflow-hidden cursor-pointer outline-none hover:outline hover:outline-black-40 smooth bg-black-10"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              onClick={() => setImgShow(i)}
            />
          </div>
        ))}
      </div>
      <div className="w-full order-1 xl:order-2 aspect-square overflow-hidden  rounded-xl bg-black-10">
        <AnimatePresence>
          <motion.img
            key={variant.image[imgShow]}
            src={variant.image[imgShow]}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full object-cover cursor-pointer"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
const DetailPage = () => {
  const { id } = useParams();
  const [theproduct, setTheProduct] = useState(
    products.find((p) => p.id == id)
  );

  const [tabContent, setTabContent] = useState(tabs[1]);
  const [variant, setVariant] = useState(theproduct.variant[0]);
  const [size, setSize] = useState(theproduct.size[2]);
  const [qty, setQty] = useState(1);

  const dataCart = useDatacart(id, theproduct, variant, size, qty)

  const productSlices = products.slice(0, 5);

  const addToCart = useCartItems((state) => state.addToCart);
  const cartItems = useCartItems((state) => state.cartItems);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTheProduct(products.find((p) => p.id == id));
    setVariant(theproduct.variant[0]);
  }, [id, theproduct]);

 

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [variant]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="main-container">
        <hr />
        <Budge thisPage={"detail"} />
        <div className="flex gap-4 gap-y-8 xl:gap-8 flex-col xl:flex-row justify-center">
          <Images variant={variant} />
          <div className="details flex-1">
            <div className="flex flex-col gap-6 card-price">
              <div className="detail flex gap-3 flex-col">
                <h2>{theproduct.name}</h2>
                <div className="flex gap-8 mt-2 items-center">
                  <StarRating
                    rating={theproduct.rating}
                    styles={" origin-left scale-125"}
                  />
                  <p className="tx-2">({theproduct.rating}/5)</p>
                </div>
                <div className="flex gap-3">
                  {theproduct.discount ? (
                    <div className="flex gap-3">
                      <p className="price">
                        <Usd>
                          {(theproduct.price * (100 - theproduct.discount)) /
                            100}
                        </Usd>
                      </p>
                      <p className="price-discount">
                        <Usd>{theproduct.price}</Usd>
                      </p>
                      <span className="discount">{`${theproduct.discount}%`}</span>
                    </div>
                  ) : (
                    <p className="price">
                      <Usd>{theproduct.price}</Usd>
                    </p>
                  )}
                </div>
                <p className="tx-2 text-black-60">{theproduct.description}</p>
              </div>
              <hr />
              <div className="color flex gap-3 flex-col">
                <p className="tx-2 text-black-60">Select Color</p>
                <div className="flex gap-3">
                  {theproduct.variant.map((vr, i) => (
                    <div
                      key={i}
                      onClick={() => setVariant(vr)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        vr === variant && "outline"
                      } hover:outline outline-black-20 overflow-hidden cursor-pointer`}
                      style={{ backgroundColor: vr.color.hex }}
                    >
                      {vr === variant && (
                        <motion.i
                          className={`${
                            vr.color == "#F7F7F4"
                              ? "text-black-40"
                              : "text-white"
                          } tx-3 ic-checklist block`}
                          layoutId="checklist"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="size flex gap-3 flex-col">
                <p className="tx-2 text-black-60">Choose Size</p>
                <div className="flex gap-3">
                  {theproduct.size.map((sz, i) => (
                    <div
                      key={i}
                      onClick={() => setSize(sz)}
                      className={`tx-1 px-4 py-3 rounded-full cursor-pointer smooth ${
                        size === sz
                          ? "text-white bg-black-100"
                          : "text-black-60 bg-black-10 hover:text-white hover:bg-black-100 "
                      }`}
                    >
                      <SizeName s={sz} />
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="btn flex gap-5 w-full">
                <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black-10 rounded-full">
                  <i
                    className="ic-minus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                    onClick={() => setQty(qty - 1)}
                  />
                  <p className="tx-2 p-2 font-bold">{qty}</p>
                  <i
                    className="ic-plus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                    onClick={() => setQty(qty + 1)}
                  />
                </div>
                <Button
                  type="primary"
                  label="add to cart"
                  styles="max-w-full flex-1"
                  icon="ic-cart"
                  onClk={() => addToCart(dataCart)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-container mt-12 xl:mt-20 ">
        <ul className="flex text-center">
          {tabs.map((tab, i) => (
            <li
              key={i}
              onClick={() => setTabContent(tab)}
              className={`flex-1 relative tx-2 py-3 cursor-pointer smooth ${
                tab === tabContent
                  ? "text-black-100"
                  : "text-black-60 hover:text-black-100"
              }`}
            >
              {tab.name}
              {tab === tabContent && (
                <motion.div
                  className="absolute w-full top-full border-b-2 bg-black-10 "
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>
        <hr />
        <div className="h-full">
          <AnimatePresence>
            <motion.div
              key={tabContent ? tabContent.name : null}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {tabContent ? tabContent.content : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="mt-12 xl:mt-16">
        <div className="main-container">
          <h2 className="text-center">you might also like</h2>
        </div>
        <div className="main-container flex gap-6 flex-nowrap xl:flex-wrap overflow-x-scroll hide-scroll-bar mt-12 xl:mt-16">
          {productSlices.map((product, i) => (
            <CardProduct key={i} product={product} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default DetailPage;
