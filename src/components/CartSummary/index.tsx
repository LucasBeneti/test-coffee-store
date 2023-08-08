import { ChangeEvent, useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
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
import { QuantityInput } from "../QuantityInput";
import { DeleteButton } from "../DeleteButton";
import expressoTrad from "../../assets/expresso-trad.png";

export const CartSummary = () => {
  const { order } = useContext(CartContext);
  const fixedDeliveryTax = 4.9;
  const getSubTotal = () => {
    if (!order.length) return;

    const totalCost = order.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    const costs = {
      itemsCost: totalCost || 0.0,
      deliveryTax: fixedDeliveryTax || 0.0,
      finalCost: totalCost + fixedDeliveryTax,
    };
    return costs;
  };

  return (
    <CartSummaryWrapper>
      <h3>Cafés selecionados</h3>
      <CartContent>
        <CartList>
          {order.length ? (
            order.map((coffee) => {
              return (
                <CartItemComponent
                  id={coffee.id}
                  name={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  key={coffee.id}
                />
              );
            })
          ) : (
            <>Empty cart.</>
          )}
        </CartList>
        <CartFooter>
          <Divider />
          <CartSum>
            <CartSumRow>
              <span>Total de itens</span>
              <span>R$ {getSubTotal()?.itemsCost.toFixed(2)}</span>
            </CartSumRow>
            <CartSumRow>
              <span>Entrega</span>
              <span>R$ {getSubTotal()?.deliveryTax.toFixed(2)}</span>
            </CartSumRow>
            <CartSumRow isLastRow>
              <span>Total</span>
              <span>R$ {getSubTotal()?.finalCost.toFixed(2)}</span>
            </CartSumRow>
          </CartSum>
          <SubmitOrder type="submit">Confirmar</SubmitOrder>
        </CartFooter>
      </CartContent>
    </CartSummaryWrapper>
  );
};

interface CartItemComponentProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItemComponent = ({
  id,
  name,
  price,
  quantity,
}: CartItemComponentProps) => {
  const [currentQuantity, setCurrrentQuantity] = useState(quantity);
  const { deleteCoffeeFromOrder } = useContext(CartContext); // TODO after deletgin an item, the whole summary calculus is being undefined
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    console.log("event.target.value", event.target.value);
    setCurrrentQuantity(Number(event.target.value));
    console.log("trying to change the coffee quantity of the item with id ");
  };
  return (
    <>
      <CartItem>
        <div style={{ display: "flex", gap: "20px" }}>
          <img src={expressoTrad} alt="Expresso trad" />
          <CartItemMiddleSection style={{ display: "flex" }}>
            <p>{name}</p>
            <div>
              <QuantityInput
                name="amount"
                type="number"
                value={currentQuantity}
                onChange={handleQuantityChange}
              />
              <DeleteButton
                label="remover"
                onClick={() => deleteCoffeeFromOrder(id)}
              />
            </div>
          </CartItemMiddleSection>
        </div>
        <CartItemPrice>R$ {price.toFixed(2)}</CartItemPrice>
      </CartItem>
      <Divider />
    </>
  );
};
