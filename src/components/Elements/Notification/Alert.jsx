import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Alert = ({ text }) => {
  const [show, setShow] = useState(true);
  
  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className={`alert`}
        >
          <i className="tx-2 text-white font-bold ic-checklist rounded-full p-1.5 bg-green" />
          <div className="">
            <p className="tx-2 font-bold">Success</p>
            <p className="tx-1">{text}</p>
          </div>
          <i
            className="tx-3 text-black-40 hover:text-black-60 ic-x cursor-pointer"
            onClick={() => setShow(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
