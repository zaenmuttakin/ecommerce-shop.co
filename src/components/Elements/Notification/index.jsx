import { useRef, useState } from "react";

const Notification = () => {
  const notifRef = useRef(null);
  const [displayNotif, setDisplayNotif] = useState(true);

  const closeNotif = () => {
    setDisplayNotif(false);
  }

  return (

    <div className={`bg-black-100 py-2.5 ${displayNotif ? "block" : "hidden"}`} ref={notifRef}>
      <div className="main-container relative text-center">
        <p className="tx-1 text-white">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="font-bold link">
            Sign Up Now
          </a>
        </p>
        <button className="absolute top-0 right-0 hidden xl:block" onClick={() => closeNotif()} >
          <i className="ic-x tx-3 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
