import {
  MapPinLine,
  CurrencyDollarSimple,
  Bank,
  CreditCard,
  Money,
} from "@phosphor-icons/react";
import {
  CartWrapper,
  CartAddress,
  CartAddressForm,
  CartAddressFormHeading,
  CartSummary,
  CartPaymentMethod,
  PaymentOptions,
  CartAddressFormFirstRow,
  CartAddressFormSecondRow,
  CartAddressFormThirdRow,
  CartAddressFormFourthRow,
} from "./style";
import { defaultTheme } from "../../styles/theme/default";

const CartPage = () => {
  return (
    <CartWrapper>
      <CartAddress>
        <h3>Complete seu pedido</h3>
        <CartAddressForm>
          <CartAddressFormHeading>
            <MapPinLine size={24} fill={defaultTheme["yellow-400"]} />
            <span>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </span>
          </CartAddressFormHeading>
          <CartAddressFormFirstRow>
            <input type="text" name="cep" placeholder="CEP" />
          </CartAddressFormFirstRow>
          <CartAddressFormSecondRow>
            <input type="text" name="street" placeholder="Endereço" />
          </CartAddressFormSecondRow>
          <CartAddressFormThirdRow>
            <input type="text" name="number" placeholder="Número" />
            <input type="text" name="complement" placeholder="Complemento" />
          </CartAddressFormThirdRow>
          <CartAddressFormFourthRow>
            <input type="text" name="neighborhood" placeholder="Bairro" />
            <input type="text" name="city" placeholder="Cidade" />
            <input type="text" name="state" placeholder="UF" />
          </CartAddressFormFourthRow>
        </CartAddressForm>
        <CartPaymentMethod>
          <span>
            <CurrencyDollarSimple size={24} fill={defaultTheme["purple-400"]} />
            <p>Pagamento</p>
          </span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <PaymentOptions>
            <button>
              <CreditCard size={24} fill={defaultTheme["purple-400"]} />
              Cartão de crédito
            </button>
            <button>
              <Bank size={24} fill={defaultTheme["purple-400"]} />
              Cartão de débito
            </button>
            <button>
              <Money size={24} fill={defaultTheme["purple-400"]} />
              Dinheiro
            </button>
          </PaymentOptions>
        </CartPaymentMethod>
      </CartAddress>
      <CartSummary>
        <h3>Cafés selecionados</h3>
        <div>conta final</div>
      </CartSummary>
    </CartWrapper>
  );
};

export default CartPage;
