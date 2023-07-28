import { DeleteButton } from "../DeleteButton";
import {
  CartSummaryWrapper,
  CartContent,
  CartList,
  CartItem,
  CartItemMiddleSection,
  CartItemPrice,
  Divider,
  CartSum,
  CartSumRow,
  SubmitOrder,
  CartFooter,
} from "./style";
import expressoTrad from "../../assets/expresso-trad.png";
import { QuantityInput } from "../QuantityInput";

export const CartSummary = () => {
  return (
    <CartSummaryWrapper>
      <h3>Cafés selecionados</h3>
      <CartContent>
        <CartList>
          <CartItem>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={expressoTrad} alt="Expresso trad" />
              <CartItemMiddleSection style={{ display: "flex" }}>
                <p>Expresso tradicional</p>
                <div>
                  <QuantityInput name="amount" />
                  <DeleteButton label="remover" />
                </div>
              </CartItemMiddleSection>
            </div>
            <CartItemPrice>R$ 9,90</CartItemPrice>
          </CartItem>
          <Divider />
          <CartItem>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={expressoTrad} alt="Expresso trad" />
              <CartItemMiddleSection style={{ display: "flex" }}>
                <p>Expresso tradicional</p>
                <div>
                  <QuantityInput name="amount" />
                  <DeleteButton label="remover" />
                </div>
              </CartItemMiddleSection>
            </div>
            <CartItemPrice>R$ 9,90</CartItemPrice>
          </CartItem>
        </CartList>
        <CartFooter>
          <Divider />
          <CartSum>
            <CartSumRow>
              <span>Total de itens</span>
              <span>R$ 99,00</span>
            </CartSumRow>
            <CartSumRow>
              <span>Entrega</span>
              <span>R$ 3,00</span>
            </CartSumRow>
            <CartSumRow isLastRow>
              <span>Total</span>
              <span>R$ 102,00</span>
            </CartSumRow>
          </CartSum>
          <SubmitOrder>Confirmar</SubmitOrder>
        </CartFooter>
      </CartContent>
    </CartSummaryWrapper>
  );
};
