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

const addressFormValidationSchema = zod.object({
  zipcode: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
});

type OrderAddressFormData = zod.infer<typeof addressFormValidationSchema>;

const CartPage = () => {
  const addressForm = useForm<OrderAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const { handleSubmit, reset, getValues, formState } = addressForm;

  const handleCreateOrderAddress = (data: OrderAddressFormData) => {
    console.log(data);
    reset();
  };

  // TODO check why the form data is not being validated, and if it should be validated at all
  const handleAddressValidation = () => {
    if (!formState.isValid) {
      console.log("form still not valid");
      return;
    }
    const currentFormState = getValues();
    console.log("currentFormState", currentFormState);
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
      <CartSummary />
    </CartWrapper>
  );
};

export default CartPage;

const AddressFormTest = () => {
  // had to move this code to a separated component
  // just because I have to call the useFormContext hook
  // being inside a component
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
