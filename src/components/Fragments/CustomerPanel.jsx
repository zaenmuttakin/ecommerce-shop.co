import { useState } from "react";
import { motion } from "framer-motion";
import StarRating from "../Elements/StarRating";
import { happyCust } from "../../constants/productData";
const arr = happyCust;
const CustPanel = () => {
  let [scrollX, setscrollX] = useState(0);
  const view = () => {
    const xl = window.matchMedia("(min-width: 1280px)");
    if (xl.matches) {
      return 3;
    } else {
      return 1;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="main-container flex gap-2 justify-between items-end">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-3">
          <button
            onClick={() => {
              scrollX < 0 && setscrollX(scrollX + 1);
            }}
            className="flex text-black-60 hover:text-black-100 smooth"
          >
            <i className="ic-arrow tx-4 rotate-180" />
          </button>
          <button
            onClick={() => {
              scrollX == view() - arr.length
                ? setscrollX(0)
                : setscrollX(scrollX - 1);
            }}
            className="flex text-black-60 hover:text-black-100 smooth"
          >
            <i className="ic-arrow tx-4" />
          </button>
        </div>
      </div>

      <div className="relative main-container flex gap-5 overflow-hidden xl:overflow-visible">
        {arr.map((c, i) => {
          const styles = `flex flex-col gap-3 rounded-xl min-w-full xl:min-w-[32.5%] p-8 border border-black-10 hover:border-black-20 `;
          const calcX = (scrollX) => {
            return `calc(${100 * scrollX}% + ${20 * scrollX}px)`;
          };

          if (Math.abs(scrollX) <= i && i < view() + Math.abs(scrollX)) {
            return (
              <motion.div
                key={i}
                className={styles}
                initial={{
                  x: 0,
                  scale: 1,
                  opacity: 0,
                }}
                animate={{
                  x: calcX(scrollX),
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <StarRating rating={c.rate} />
                <div className="flex gap-2">
                  <p className="tx-2 font-bold">{c.name}</p>
                  <i className="tx-2 ic-checklist p-1 bg-green rounded-full text-white " />
                </div>
                <p className="tx-2 text-black-60">{c.comment}</p>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={i}
                className={styles}
                initial={{
                  x: 0,
                  scale: 1,
                  opacity: 0,
                  originX: 0,
                }}
                animate={{
                  x: calcX(scrollX),
                  scale: 0.8,
                  opacity: 1,
                  originX: i == Math.abs(scrollX) - 1 ? 1 : 0,
                  filter: "blur(1px)",
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <StarRating rating={c.rate} />
                <div className="flex gap-2">
                  <p className="tx-2 font-bold">{c.name}</p>
                  <i className="tx-2 ic-checklist p-1 bg-green rounded-full text-white " />
                </div>
                <p className="tx-2 text-black-60">{c.comment}</p>
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CustPanel;
