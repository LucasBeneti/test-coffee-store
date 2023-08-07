import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartContext, CoffeeOrder } from "../../contexts/CartContext";
import {
  CoffeeCardWrapper,
  CoffeeImage,
  CoffeeTags,
  CoffeeTitle,
  CoffeeDescription,
  CoffeeFooter,
  CoffeePrice,
} from "./style";
import expressoTrad from "../../assets/expresso-trad.png";

export const CoffeeCard = ({ id, name, price }: CoffeeOrder) => {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);
  const { addCoffeeToCart } = useContext(CartContext);

  const handleAddCoffeeToCart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!coffeeQuantity) return;

    console.log(`coffee quantity`, coffeeQuantity);
    const coffeeDTO = {
      id,
      name,
      price,
      quantity: coffeeQuantity,
    };
    addCoffeeToCart(coffeeDTO); // TODO set correct parameters to send it to the context store
  };
  return (
    <CoffeeCardWrapper key={id}>
      <CoffeeImage src={expressoTrad} alt="" />
      <CoffeeTags>
        <span>tradicional</span>
        <span>tradicional</span>
      </CoffeeTags>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <CoffeeFooter>
        <CoffeePrice>
          R$<p>{price.toFixed(2)}</p>
        </CoffeePrice>
        <form onSubmit={handleAddCoffeeToCart}>
          <input
            type="number"
            name="coffeeQuantity"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCoffeeQuantity(Number(e.target.value));
            }}
            value={coffeeQuantity}
          />
          <button type="submit">
            <ShoppingCart weight="fill" fill="white" />
          </button>
        </form>
      </CoffeeFooter>
    </CoffeeCardWrapper>
  );
};
