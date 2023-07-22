import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    button {
      display: flex;
      gap: 0.25rem;
      background: ${(props) => props.theme["purple-100"]};
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      span {
        color: ${(props) => props.theme["purple-400"]};
      }

      svg {
        fill: ${(props) => props.theme["purple-400"]};
      }
    }

    a {
      display: flex;
      justify-self: center;
      align-self: center;
      padding: 0.5rem;
      background: ${(props) => props.theme["yellow-100"]};
      border-radius: 6px;
      svg {
        fill: ${(props) => props.theme["yellow-400"]};
      }
    }
  }
`;
