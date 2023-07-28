import styled from "styled-components";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 2rem;
  row-gap: 0.75rem;

  padding: 4rem 10rem;
`;

export const CartAddress = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`;

export const CartAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;
  border-radius: 6px;

  input {
    padding: 0.75rem;
    background: ${(props) => props.theme["gray-300"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 6px;

    color: ${(props) => props.theme["brown-400"]};

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-700"]};
    }

    &::placeholder {
      color: ${(props) => props.theme["brown-300"]};
    }
  }
`;

export const CartAddressFormFirstRow = styled.div`
  display: flex;
  align-items: flex-start;

  input {
    width: 35%;
  }
`;
export const CartAddressFormSecondRow = styled.div`
  display: flex;
  align-items: flex-start;
  input {
    width: 100%;
  }
`;
export const CartAddressFormThirdRow = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  column-gap: 0.75rem;
`;
export const CartAddressFormFourthRow = styled.div`
  display: grid;
  grid-template-columns: 35% auto 10%;
  column-gap: 0.75rem;
`;

export const CartAddressFormHeading = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  span {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1rem;
      font-weight: 300;
      font-family: "Roboto", sans-serif;
    }
    p {
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
    }
  }
`;

export const CartPaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;

  margin-top: 0.75rem;

  span {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    p {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;

  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: none;
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 1rem;
    color: ${(props) => props.theme["gray-600"]};
    text-transform: capitalize;
    border-radius: 6px;
  }
`;
