import { useState, createContext, ReactNode } from "react";
import { OrderAddressFormData } from "../pages/Cart";

interface CartContextType {
  orderAddress: OrderAddressFormData | undefined;
  addCoffeeToCart: (coffee: CoffeeOrder) => void;
  addOrderAddress: (data: OrderAddressFormData) => void;
  setPaymentOption: (option: PaymentOptionType) => void;
  paymentOption: PaymentOptionType | undefined;
}

export const CartContext = createContext({} as CartContextType);

export type PaymentOptionType = "credit" | "debit" | "money";

export type CoffeeOrder = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  tags?: string[];
};
interface CartContextProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [orderAddress, setOrderAddress] = useState<OrderAddressFormData>();
  const [paymentOption, setPaymentOption] = useState<PaymentOptionType>();
  const [order, setOrder] = useState<CoffeeOrder[]>([]);

  const addOrderAddress = (address: OrderAddressFormData) => {
    setOrderAddress(address);
  };

  const addCoffeeToCart = (coffee: CoffeeOrder) => {
    console.log("adding coffee to cart!!!", coffee);
    setOrder((state) => [...state, coffee]);
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
