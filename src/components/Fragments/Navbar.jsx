import { Fragment } from "react";
import Notification from "../Elements/Notification/TopNotificaton";
import NavMenu from "../Elements/NavMenu";
import Logo from "../Elements/Logo";
import InputField from "../Elements/InputField/InputField";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCartItems } from "../../hooks/globalState/useCartItems";
import TopNotification from "../Elements/Notification/TopNotificaton";
const Navbar = () => {
  const srcRef = useRef(null);
  const [displaySrc, setDisplaySrc] = useState(false);
  const handleSrc = () => {
    setDisplaySrc(!displaySrc);
  };
  const cartQty = useCartItems((state) => state.cartItems.length);
  const addToCartItem = useCartItems((state) => state.addToCart);
  return (
    <Fragment>
      <TopNotification />
      <nav className="bg-white ">
        <div className="main-container relative flex justify-between items-center gap-2 py-4 xl:gap-20 xl:py-6">
          <div className="flex items-center gap-5 xl:gap-20">
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
              <button
                className="block xl:hidden cursor-pointer"
                onClick={() => handleSrc()}
              >
                <i className="ic-search tx-3" />
              </button>
              <div
                className={`${
                  displaySrc ? "flex" : "hidden"
                } absolute main-container items-center bg-white h-full w-full top-0 left-0 z-10`}
                ref={srcRef}
              >
                <InputField
                  icon="ic-x"
                  styles="scale-90 w-full"
                  alignIcon="right"
                  click={handleSrc}
                  placeholder="Search fo products ..."
                />
              </div>
            </div>
            <Link
              to={"/ecommerce-shop.co/cart/"}
              className="cursor-pointer relative"
            >
              <i
                className="ic-cart tx-3 hover:text-black-60 smooth"
              />
              {cartQty > 0 && <p className="cart-badge">{cartQty}</p>}
            </Link>
            <button className="cursor-pointer" onClick={() => addToCartItem()}>
              <i className="ic-user tx-3 hover:text-black-60 smooth" />
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
