import styled from "styled-components";

export const CartSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    line-height: 1.3;

    margin-bottom: 1rem;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  flex: 1;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme["gray-200"]};

  justify-content: space-between;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.25rem;

  img {
    width: 4rem;
    width: 4rem;
  }
`;

export const CartItemMiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-left: 20px; */
  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CartItemPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  font-size: 1rem;
  font-weight: bold;
`;

export const Divider = styled.span`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme["gray-400"]};

  margin: 1.5rem 0;
`;

export const CartFooter = styled.div`
  justify-self: flex-end;

  display: flex;
  flex-direction: column;
`;

export const CartSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1rem;
`;

export const CartSumRow = styled.span<{ isLastRow?: boolean }>`
  display: flex;
  justify-content: space-between;

  font-size: ${(props) => (props.isLastRow ? "1.25rem" : `0.875rem`)};
  font-weight: ${(props) => (props.isLastRow ? `700` : `400`)};
`;

export const SubmitOrder = styled.button`
  color: white;
  background-color: ${(props) => props.theme["yellow-400"]};
  font-weight: 600;
  font-size: 0.875rem;

  border-radius: 6px;
  border: none;

  padding: 0.75rem;
  line-height: 1.6;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-600"]};
  }
`;
