import { useState, createContext, ReactNode } from "react";
import { OrderAddressFormData } from "../pages/Cart";

interface CartContextType {
  orderAddress: OrderAddressFormData | undefined;
  addCoffeeToCart: () => void;
  addOrderAddress: (data: OrderAddressFormData) => void;
  setPaymentOption: (option: PaymentOptionType) => void;
  paymentOption: PaymentOptionType | undefined;
}

export const CartContext = createContext({} as CartContextType);

export type PaymentOptionType = "credit" | "debit" | "money";

interface CartContextProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [orderAddress, setOrderAddress] = useState<OrderAddressFormData>();
  const [paymentOption, setPaymentOption] = useState<PaymentOptionType>();

  const addOrderAddress = (address: OrderAddressFormData) => {
    setOrderAddress(address);
  };

  const addCoffeeToCart = () => {
    console.log("adding coffee to cart!!!");
  };
  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        addOrderAddress,
        orderAddress,
        setPaymentOption,
        paymentOption,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
