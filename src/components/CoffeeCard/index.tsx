import { ShoppingCart } from "@phosphor-icons/react";
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
export const CoffeeCard = () => {
  return (
    <CoffeeCardWrapper>
      <CoffeeImage src={expressoTrad} alt="" />
      <CoffeeTags>
        <span>tradicional</span>
        <span>tradicional</span>
      </CoffeeTags>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <CoffeeFooter>
        <CoffeePrice>
          R$<p>9,90</p>
        </CoffeePrice>
        <span>
          <input type="number" />
          <button>
            <ShoppingCart weight="fill" fill="white" />
          </button>
        </span>
      </CoffeeFooter>
    </CoffeeCardWrapper>
  );
};
