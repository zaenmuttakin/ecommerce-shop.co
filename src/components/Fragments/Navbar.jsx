import { Fragment } from "react";
import Notification from "../Elements/Notification";
import NavMenu from "../Elements/NavMenu";
import Logo from "../Elements/Logo";
import InputField from "../Elements/InputField/InputField";
import { useRef, useState } from "react";
const Navbar = () => {
    const srcRef = useRef(null);
    const [displaySrc, setDisplaySrc] = useState(false);
    const handleSrc = () => {
      setDisplaySrc(!displaySrc);
    }
  return (
    <Fragment>
      <Notification />
      <nav className="main-container relative flex justify-between items-center gap-2 py-4 xl:gap-20 xl:py-6">
        <div className="flex items-center gap-0 xl:gap-20">
          <Logo styles="order-2 xl:order-1" />
          <NavMenu styles={"order-1 xl:order-2"} />
        </div>
        <div className="flex-1 hidden xl:block">
          <InputField
            icon="ic-search"
            alignIcon="left"
            placeholder="Search fo products ..."
          />
        </div>

        <div className="menu flex gap-4 xl:gap-6 ">
          <div className="search">
            <button className="block xl:hidden cursor-pointer" onClick={() => handleSrc()}>
              <i className="ic-search tx-3" />
            </button>
            <div className={`${displaySrc ? "flex" : "hidden"} absolute main-container items-center bg-white h-full w-full top-0 left-0`} ref={srcRef}>
              <InputField
                icon="ic-x"
                styles="scale-75 w-full"
                alignIcon="right"
                click={handleSrc}
                placeholder="Search fo products ..."
              />
            </div>
          </div>
          <button className="cursor-pointer">
            <i className="ic-cart tx-3" />
          </button>
          <button className="cursor-pointer">
            <i className="ic-user tx-3" />
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
