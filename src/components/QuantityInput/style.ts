import { styled } from "styled-components";

export const QuantityInputButton = styled.input`
  color: ${(props) => props.theme["brown-600"]};

  padding: 0.5rem;
  background: ${(props) => props.theme["gray-400"]};
  border-radius: 6px;
  border: none;

  width: 4rem;

  font-size: 1rem;

  &::placeholder {
    color: ${(props) => props.theme["brown-300"]};
  }
`;
