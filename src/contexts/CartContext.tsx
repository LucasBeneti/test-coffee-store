import { createContext, ReactNode } from "react";

interface CartContextType {
  addCoffeeToCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const addCoffeeToCart = () => {
    console.log("adding coffee to cart!!!");
  };
  return (
    <CartContext.Provider value={{ addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
