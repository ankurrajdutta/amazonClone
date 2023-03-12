import React, { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./Reducer";

// Prepares the dataLayer
export const ShopContext = createContext(initialState);

// Wrap our app and provide the Data layer
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: {
        user: user,
      },
    });
  };

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    user: state.user,
    addToCart,
    removeFromCart,
    addUser,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
// Pull information from the data layer
const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};
export default useShop;
