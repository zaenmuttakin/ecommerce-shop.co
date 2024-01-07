import Budge from "../components/Elements/Budge/Budge";
import SizeName from "../components/Elements/SizeName";
import { Usd } from "../components/Elements/Curency";
import Button from "../components/Elements/Button";
import InputField from "../components/Elements/InputField/InputField";
import { useGlobalState } from "../hooks/globalState/useGlobalState";

const ProductList = ({data}) => {
  const {cartItems, setCart} = data;

  return (
    <div className="w-full xl:w-7/12 h-fit border border-black-10 rounded-2xl p-4 xl:p-6">
      {cartItems.length <= 0
        ? "Your cart is empty"
        : cartItems.map((product, i) => (
            <div key={i}>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-5 justify-between">
                <img
                  src={product.image}
                  className="h-36 aspect-square rounded-xl object-cover"
                  alt={product.name}
                />
                <div className="relative flex flex-col justify-between rounded-xl w-full overflow-hidden">
                  <div className="flex flex-col gap-1">
                    <p className="tx-2 font-bold text-black-100 capitalize w-10/12 truncate">
                      {product.name}
                    </p>
                    <p className="tx-2 text-black-100 capitalize">
                      Size:{" "}
                      <span className="text-black-60">
                        <SizeName s={product.size} />
                      </span>
                    </p>
                    <p className="tx-2 text-black-100 capitalize">
                      Color:{" "}
                      <span className="text-black-60">
                        {product.color.name}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 justify-between items-center">
                    <p className="tx-3 font-bold text-black-100">
                      <Usd>{product.price}</Usd>
                    </p>
                    <div className="flex justify-center items-center gap-2 px-2 py-1 bg-black-10 rounded-full">
                      <i
                        className="ic-minus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                        onClick={() => setCart("DECREMENT_QTY", product.idCart)}
                      />
                      <p className="tx-2 p-2 font-bold">{product.qty}</p>
                      <i
                        className="ic-plus p-2 rounded-full hover:bg-black-10 cursor-pointer smooth"
                        onClick={() => setCart("INCREMENT_QTY", product.idCart)}
                      />
                    </div>
                  </div>
                  <div>
                    <i className="tx-3 ic-trash text-black-60 hover:text-red-100 absolute top-2 right-2 cursor-pointer z-10" 
                    onClick={() => setCart("DELETE", product.idCart)} />
                  </div>
                </div>
              </div>
              <hr
                className={`my-6 ${
                  i < cartItems.length - 1 ? "block" : "hidden"
                }`}
              />
            </div>
          ))}
    </div>
  );
};

const OrderSummary = ({data}) => {
  const subtotalBeforeDiscount = data.reduce((acc, val) => acc + val.price * val.qty, 0);
  const subtotalAfterDiscount = data.reduce((acc, val) => acc + (100-val.discount)/100 * val.price * val.qty, 0);
  const discountPreserentage = data.length > 0 ? (subtotalBeforeDiscount - subtotalAfterDiscount) / subtotalBeforeDiscount * 100 : 0;
  const discount = subtotalBeforeDiscount - subtotalAfterDiscount;
  const deliveryFee = data.length > 0 ? 10 : 0;
  const total = subtotalAfterDiscount + deliveryFee;

  return (
    <div className="w-full xl:w-5/12 h-fit border border-black-10 rounded-2xl p-4 xl:p-6">
      <p className="tx-3 font-bold text-black-100 capitalize mb-6">
        Order Summary
      </p>
      <table>
        <tbody>
          <tr className="h-10">
            <td className="tx-2 text-black-60 capitalize w-full">subtotal</td>
            <td className="tx-3 font-bold text-black-100 text-right">
              <Usd>{subtotalBeforeDiscount}</Usd>
            </td>
          </tr>
          <tr className="h-10">
            <td className="tx-2 text-black-60 capitalize w-full">
              discount ( {Math.round(discountPreserentage)}% )
            </td>
            <td className="tx-3 font-bold text-red-100 text-right">
              -<Usd>{discount}</Usd>
            </td>
          </tr>
          <tr className="h-10">
            <td className="tx-2 text-black-60 capitalize w-full">
              delivery fee
            </td>
            <td className="tx-3 font-bold text-black-100 text-right">
              <Usd>{deliveryFee}</Usd>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="my-6" />
      <div className="flex justify-between mb-6">
        <p className="tx-2 font-bold text-black-60 mb-5 capitalize">Total</p>
        <p className="tx-3 font-bold text-black-100">
          <Usd>{total}</Usd>
        </p>
      </div>
      <div className="flex gap-3 mb-6">
        <InputField
          placeholder={"Add promo code"}
          icon={"ic-tag"}
          alignIcon={"left"}
          styles={"w-full"}
        />
        <Button
          type="primary-md"
          label="Apply"
          styles={"py-0"}
          styleLbl={"self-center"}
          showIcon={false}
        />
      </div>
      <Button
        type="primary"
        label="Checkout"
        styles={"w-full"}
        icon={"ic-cart"}
      />
    </div>
  );
};

const CartPage = () => {
  const cartItems = useGlobalState((state) => state.cartItems);
  const setCart = useGlobalState((state) => state.setCart);
  return (
    <section className="main-container">
      <Budge thisPage={"cart"} />
      <h2 className="mb-8">your cart</h2>
      <div className="flex flex-col xl:flex-row gap-5">
        <ProductList data = {{cartItems, setCart} }/>
        <OrderSummary data ={cartItems}/>
      </div>
    </section>
  );
};

export default CartPage;
