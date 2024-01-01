import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TopNotification = () => {
  const notifRef = useRef(null);
  const [displayNotif, setDisplayNotif] = useState(true);

  const closeNotif = () => {
    setDisplayNotif(false);
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: .5, delay: .5 }}
    >
      <div
        className={`bg-black-100 py-2.5 ${displayNotif ? "block" : "hidden"}`}
        ref={notifRef}
      >
        <div className="main-container relative text-center">
          <p className="tx-1 text-white">
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="font-bold link">
              Sign Up Now
            </a>
          </p>
          <button
            className="absolute top-0 right-0 hidden xl:block"
            onClick={() => closeNotif()}
          >
            <i className="ic-x tx-3 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TopNotification;
