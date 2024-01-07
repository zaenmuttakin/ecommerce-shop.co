import { create } from "zustand";

const useGlobalState = create((set) => ({
  // cart state -->
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  addToCart: (data) =>
    set((state) => {
      let newCart;
      let cartId;
      let newItem;

      const sameID = state.cartItems.find(
        (i) => i.idProduct === data.idProduct
      );
      const sameSize = state.cartItems.find((s) => s.size == data.size);
      const sameColor = state.cartItems.find(
        (c) => c.color.id === data.color.id
      );

      if (sameID && sameSize && sameColor) {
        let i = state.cartItems.indexOf(sameID);
        state.cartItems.splice(i, 1);
        newItem = { ...sameID, qty: (sameID.qty += data.qty) };
        newCart = [...state.cartItems, newItem];
      } else {
        cartId = getCardId(state.cartItems);
        newItem = { ...data, idCart: cartId };
        newCart = [...state.cartItems, newItem];
      }

      localStorage.setItem("cartItems", JSON.stringify(newCart));
      state.setPushNotification({
        type: "add",
        data: { alertType: "success", message: "Item added to cart" },
      });
      return { cartItems: newCart };
    }),

  setCart: (type, data) =>
    set((state) => {
      const item = state.cartItems.find((i) => i.idCart == data);
      let itemIndex = state.cartItems.indexOf(item);
      let setItem;

      switch (type) {
        case "DECREMENT_QTY":
          if (item.qty == 1) {
            state.cartItems.splice(itemIndex, 1);
          } else {
            setItem = state.cartItems.map((c) => {
              if (c.idCart === data) {
                return { ...c, qty: c.qty - 1 };
              }
              return c;
            });
          }
          break;

        case "INCREMENT_QTY":
          setItem = state.cartItems.map((c) => {
            if (c.idCart === data) {
              return { ...c, qty: c.qty + 1 };
            }
            return c;
          });
          break;

        case "DELETE":
          state.cartItems.splice(itemIndex, 1);
          setItem = [...state.cartItems];
          state.setPushNotification({
            type: "add",
            data: { alertType: "success", message: "Item has been deleted" },
          });
          break;

        default:
          break;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(setItem || [...state.cartItems])
      );
      return { cartItems: setItem || [...state.cartItems] };
    }),

  // notification state
  pushNotification: [],
  setPushNotification: (data) =>
    set((state) => {
      switch (data.type) {
        case "add":
          return { pushNotification: [...state.pushNotification, {id : Math.random(), ...data.data}] };
        case "remove":
          return { pushNotification: state.pushNotification.filter((i) => i.id !== data.id) };
        default:
          break;
      }
    }),
}));

const getCardId = (carts) => {
  let newId = carts.length > 0 ? carts[carts.length - 1].idCart + 1 : 1;
  return newId;
};

export { useGlobalState };
