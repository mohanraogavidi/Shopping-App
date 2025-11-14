import { createContext, useContext, useState } from "react";

const CartlistContext = createContext();

export const CartlistProvider = ({ children }) => {
  const [cartlistItems, setCartlistItems] = useState([]);

  const addToCartlist = (item) => {
    setCartlistItems((prev) => {
      if (!prev.find((i) => i.id === item.id && i.selectedSize === item.selectedSize)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromCartlist = (id) => {
    setCartlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartlistContext.Provider value={{ cartlistItems, addToCartlist, removeFromCartlist }}>
      {children}
    </CartlistContext.Provider>
  );
};

export const useCartlist = () => useContext(CartlistContext);

