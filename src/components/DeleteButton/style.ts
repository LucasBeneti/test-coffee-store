import styled from "styled-components";

export const DeleteButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme["gray-400"]};

  span {
    text-transform: uppercase;
  }
`;
