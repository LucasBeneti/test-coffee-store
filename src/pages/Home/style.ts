import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// CoffeeList component

export const CoffeeListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 10rem 10rem 10rem;
  gap: 3rem;
  h1 {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 32px;
`;
