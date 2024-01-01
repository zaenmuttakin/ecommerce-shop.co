import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const DropList = ({ list, isOpen, styles }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute w-max mt-3 py-3 px-2 rounded-lg border border-black-10 z-30 shadow-lg top-full right-0 bg-white capitalize ${styles}`}
        >
          {list.map((item, i) => (
            <li key={i} className="cursor-pointer py-2 px-6 rounded-md hover:bg-black-100/5">
             <Link to="/ecommerce-shop.co/category">{item}</Link> 
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default DropList;
