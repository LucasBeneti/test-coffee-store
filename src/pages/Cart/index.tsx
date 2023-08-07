import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  MapPinLine,
  CurrencyDollarSimple,
  Bank,
  CreditCard,
  Money,
} from "@phosphor-icons/react";
import { CartSummary } from "../../components/CartSummary";
import {
  CartWrapper,
  CartAddress,
  CartAddressForm,
  CartAddressFormHeading,
  CartPaymentMethod,
  PaymentOptions,
  CartAddressFormFirstRow,
  CartAddressFormSecondRow,
  CartAddressFormThirdRow,
  CartAddressFormFourthRow,
} from "./style";
import { defaultTheme } from "../../styles/theme/default";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const addressFormValidationSchema = zod.object({
  zipcode: zod.string().min(2),
  street: zod.string().min(2),
  number: zod.string().min(2),
  complement: zod.string().min(2),
  neighborhood: zod.string().min(2),
  city: zod.string().min(2),
  state: zod.string().min(2),
});

export type OrderAddressFormData = zod.infer<
  typeof addressFormValidationSchema
>;

const CartPage = () => {
  const addressForm = useForm<OrderAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    mode: "onChange",
  });

  const { addOrderAddress, setPaymentOption, paymentOption } =
    useContext(CartContext);

  const { handleSubmit, reset, getValues, formState } = addressForm;

  const handleCreateOrderAddress = (data: OrderAddressFormData) => {
    console.log(data);
    reset();
  };

  const handleAddressValidation = () => {
    if (!formState.isValid) return;

    addOrderAddress(getValues());
  };

  return (
    <CartWrapper>
      <CartAddress>
        <h3>Complete seu pedido</h3>
        <CartAddressForm
          onSubmit={handleSubmit(handleCreateOrderAddress)}
          onBlur={handleAddressValidation}
        >
          <CartAddressFormHeading>
            <MapPinLine size={24} fill={defaultTheme["yellow-400"]} />
            <span>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </span>
          </CartAddressFormHeading>
          <FormProvider {...addressForm}>
            <AddressFormTest />
          </FormProvider>
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
            <button
              onClick={() => setPaymentOption("credit")}
              className={paymentOption === "credit" ? "selected" : ""}
            >
              <CreditCard size={24} fill={defaultTheme["purple-400"]} />
              Cartão de crédito
            </button>
            <button
              onClick={() => setPaymentOption("debit")}
              className={paymentOption === "debit" ? "selected" : ""}
            >
              <Bank size={24} fill={defaultTheme["purple-400"]} />
              Cartão de débito
            </button>
            <button
              onClick={() => setPaymentOption("money")}
              className={paymentOption === "money" ? "selected" : ""}
            >
              <Money size={24} fill={defaultTheme["purple-400"]} />
              Dinheiro
            </button>
          </PaymentOptions>
        </CartPaymentMethod>
      </CartAddress>
      <CartSummary />
    </CartWrapper>
  );
};

export default CartPage;

const AddressFormTest = () => {
  const { register } = useFormContext();
  return (
    <>
      <CartAddressFormFirstRow>
        <input type="text" placeholder="CEP" {...register("zipcode")} />
      </CartAddressFormFirstRow>
      <CartAddressFormSecondRow>
        <input type="text" placeholder="Endereço" {...register("street")} />
      </CartAddressFormSecondRow>
      <CartAddressFormThirdRow>
        <input type="text" placeholder="Número" {...register("number")} />
        <input
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        />
      </CartAddressFormThirdRow>
      <CartAddressFormFourthRow>
        <input type="text" placeholder="Bairro" {...register("neighborhood")} />
        <input type="text" placeholder="Cidade" {...register("city")} />
        <input type="text" placeholder="UF" {...register("state")} />
      </CartAddressFormFourthRow>
    </>
  );
};
