import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Elements/CardProduct";
import SizeName from "../components/Elements/SizeName";
import {
  category,
  colorVariant,
  dreesStyle,
  products,
} from "../constants/productData";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import DropList from "../components/Elements/DropList/DropList";
import MultiRange from "../components/Elements/MultiRange/MultiRange";
import Paginate from "../components/Elements/Paginate/Paginate";

const Budge = () => {
  return (
    <div className="flex gap-2 py-6 items-center text-black-60">
      <p className="tx-1 capitalize">home</p>
      <i className="ic-chevron -rotate-90" />
      <p className="tx-1 capitalize">category</p>
    </div>
  );
};
const FilterSection = ({ handleShowFilter }) => {
  const size = ["s", "m", "l", "xl"];
  const [priceIsOpen, setPriceIsOpen] = useState(true);
  const [colorIsOpen, setColorIsOpen] = useState(true);
  const [sizeIsOpen, setSizeIsOpen] = useState(true);
  const [dressIsOpen, setDresIsOpen] = useState(true);

  const [colorSelected, setColorSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  console.log(sizeSelected);

  const filterVariant = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="filter-section smooth">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        duration={0.8}
      >
        <div className="flex justify-between items-center">
          <p className="tx-2 font-bold">Filter</p>
          <i className="tx-3 ic-fliter hidden xl:block" />
          <i
            className="tx-3 ic-x  block xl:hidden"
            onClick={() => {
              handleShowFilter(false);
            }}
          />
        </div>
        <hr className="my-6" />
        <ul className="tx-2 flex flex-col gap-2.5">
          {category.map((ctg, i) => {
            return (
              <li key={i} className="flex justify-between cursor-pointer">
                <span className="link text-black-60 hover:text-black-100 capitalize">
                  {ctg}
                </span>
                <i className="tx-3 text-black-60 ic-chevron -rotate-90" />
              </li>
            );
          })}
        </ul>
        <hr className="my-6" />
        <div className="priceFilter">
          <div className="flex justify-between">
            <p
              className="tx-2 font-bold cursor-pointer"
              onClick={() => setPriceIsOpen(!priceIsOpen)}
            >
              Price
            </p>
            <i
              className={`tx-3 ic-chevron cursor-pointer smooth ${
                priceIsOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setPriceIsOpen(!priceIsOpen)}
            />
          </div>
          <AnimatePresence>
            {priceIsOpen && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={filterVariant}
              >
                <MultiRange max={500} valMin={100} valMax={400} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <hr className="my-6" />
        <div className="colorFilter">
          <div className="flex justify-between">
            <p
              className="tx-2 font-bold cursor-pointer"
              onClick={() => setColorIsOpen(!colorIsOpen)}
            >
              Colors
            </p>
            <i
              className={`tx-3 ic-chevron cursor-pointer smooth ${
                colorIsOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setColorIsOpen(!colorIsOpen)}
            />
          </div>
          <AnimatePresence>
            {colorIsOpen && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={filterVariant}
                className="flex gap-2 pt-4 flex-wrap"
              >
                {Object.keys(colorVariant).map((c, i) => (
                  <div
                    className={`w-10 flex justify-center items-center aspect-square rounded-full overflow-hidden cursor-pointer ${
                      colorSelected === colorVariant[c] &&
                      "outline outline-black-10"
                    }`}
                    style={{ backgroundColor: colorVariant[c] }}
                    onClick={() => setColorSelected(colorVariant[c])}
                    key={i}
                  >
                    {colorSelected === colorVariant[c] && (
                      <motion.i
                        className={`tx-3 ic-checklist ${
                          colorVariant[c] == "#F7F7F4"
                            ? "text-black-60"
                            : "text-white"
                        }`}
                        layoutId="check"
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <hr className="my-6" />
        <div className="sizeFilter">
          <div className="flex justify-between">
            <p
              className="tx-2 font-bold cursor-pointer"
              onClick={() => setSizeIsOpen(!sizeIsOpen)}
            >
              Size
            </p>
            <i
              className={`tx-3 ic-chevron cursor-pointer smooth ${
                sizeIsOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setSizeIsOpen(!sizeIsOpen)}
            />
          </div>
          <AnimatePresence>
            {sizeIsOpen && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={filterVariant}
                className="flex gap-2 flex-wrap pt-4"
              >
                {size.map((s, i) => (
                  <Button
                    onClk={() => setSizeSelected(s)}
                    key={i}
                    type="size-button"
                    styles={`${
                      s == sizeSelected ? "bg-black-100" : "bg-black-10"
                    } hover:bg-black-100`}
                    styleLbl={`${
                      s == sizeSelected ? "text-white" : "text-black-100"
                    }  group-hover:text-white`}
                    showIcon={false}
                    label={<SizeName s={s} />}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <hr className="my-6" />
        <div className="priceFilter">
          <div className="flex justify-between">
            <p
              className="tx-2 font-bold cursor-pointer"
              onClick={() => setDresIsOpen(!dressIsOpen)}
            >
              Dress Style
            </p>
            <i
              className={`tx-3 ic-chevron cursor-pointer smooth ${
                dressIsOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setDresIsOpen(!dressIsOpen)}
            />
          </div>
          <AnimatePresence>
            {dressIsOpen && (
              <motion.ul
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={filterVariant}
                className="tx-2 flex flex-col gap-2.5 pt-4"
              >
                {dreesStyle.map((d, i) => (
                  <li key={i} className="flex justify-between cursor-pointer">
                    <span className="link text-black-60 hover:text-black-100 capitalize">
                      {d}
                    </span>
                    <i className="tx-3 text-black-60 ic-chevron -rotate-90" />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <hr className="my-6" />
      <div className="filter-btn ">
        <Button
          type="primary"
          label="Apply Filter"
          styles="w-full xl:w-max"
          icon="ic-checklist"
        />
      </div>
    </div>
  );
};

const ProductSection = ({ handleShowFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);

  const totalProduct = products.length;
  const maxPage = Math.ceil(totalProduct / productPerPage);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const [currentProduct, setCurrentProduct] = useState([]);
  useEffect(() => {
    setCurrentProduct(products.slice(indexOfFirstProduct, indexOfLastProduct));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const [DropLi, setDropLi] = useState(false);
  return (
    <div className="w-full">
      <div className="flex mb-6 justify-between gap-2 xl:gap-5 items-center">
        <p className="tx-3 font-bold">Category</p>
        <p className="tx-1 w-full text-black-60 text-right">
          Showing {`${indexOfFirstProduct+1}-${indexOfLastProduct > totalProduct ? totalProduct : indexOfLastProduct}`} of {totalProduct} Products
        </p>
        <div className="flex-none gap-2 hidden xl:flex">
          <p className="tx-1 text-black-60">Sort by:</p>
          <div
            className="relative tx-1 gap-1 items-center text-black-100 cursor-pointer"
            onClick={() => setDropLi(!DropLi)}
          >
            <span>Most popular</span>
            <span>
              <i className="tx-2 ic-chevron" />
            </span>
            <DropList
              list={["Newest", "Oldest",]}
              isOpen={DropLi}
              styles="tx-1"
            />
          </div>
        </div>
        <button
          className="p-3 aspect-square items-center justify-center rounded-full bg-black-10 hover:bg-black-100 hover:text-white smooth flex xl:hidden"
          onClick={() => {
            handleShowFilter(true);
          }}
        >
          <i className="tx-2 font-bold ic-fliter" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-6">
        {currentProduct.map((x, i) => (
          <CardProduct key={i} product={x} />
        ))}
      </div>
      <hr className="mt-6 mb-5 xl:mt-8" />
      <Paginate
        total={totalProduct}
        perPage={productPerPage}
        curPage={currentPage}
        handlePage={(num) => setCurrentPage(num)}
        handleBtn={(num) => currentPage != maxPage && setCurrentPage(num)}
      />
    </div>
  );
};
const CategoryPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  useEffect(() => {
    const xl = window.matchMedia("(min-width: 1280px)");
    if (xl.matches) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, []);
  const handleShowFilter = (callback) => {
    setShowFilter(callback);
  };
  return (
    <section className="main-container">
      <hr />
      <Budge />
      <div className="flex gap-5">
        <AnimatePresence>
          {showFilter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="filter-container"
            >
              <FilterSection handleShowFilter={handleShowFilter} />
            </motion.div>
          )}
        </AnimatePresence>
        <ProductSection handleShowFilter={handleShowFilter} />
      </div>
    </section>
  );
};

export default CategoryPage;
