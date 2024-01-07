import { motion, AnimatePresence } from "framer-motion";
import { useGlobalState } from "../../../hooks/globalState/useGlobalState";
import { useEffect, useState } from "react";

const Alert = () => {
  const pushNotification = useGlobalState((state) => state.pushNotification);
  const alertArr = [];

  if (pushNotification.length > 0) {
    pushNotification.map((notification, i) => {
      alertArr.push(
        <AlertElement
          type={notification.alertType}
          message={notification.message}
          id={notification.id}
          key={i}
        />
      );
    });

    return (
      <div className="alert-container">
        {alertArr.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
      </div>
    );
  }
};

const AlertElement = ({ type, message, id }) => {
  const setPushNotification = useGlobalState(
    (state) => state.setPushNotification
  );
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setPushNotification({
        type: "remove",
        id: id,
      });
    }, 500);
  };

  setTimeout(() => {
    handleClose();
  }, 1000);

  if (type === "success") {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="alert"
          >
            <i className="tx-2 text-white font-bold ic-checklist rounded-full p-1.5 bg-green" />
            <div className="">
              <p className="tx-2 font-semibold">{message}</p>
            </div>
            <i
              className="tx-3 text-black-40 hover:text-black-60 ic-x cursor-pointer"
              onClick={handleClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
};

export default Alert;
