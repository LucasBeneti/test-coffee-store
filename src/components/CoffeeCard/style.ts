import styled from "styled-components";

export const CoffeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 36px 6px 36px;
  width: 16rem;

  position: relative;
`;

export const CoffeeImage = styled.img`
  position: absolute;
  transform: translateY(-20px);
`;

export const CoffeeTags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding-top: 120px;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme["yellow-400"]};
    background: ${(props) => props.theme["yellow-100"]};
    text-transform: uppercase;
    border-radius: 16px;
    font-weight: bold;
    font-size: 0.625rem;
  }
`;

export const CoffeeTitle = styled.p`
  color: ${(props) => props.theme["brown-600"]};

  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.3;

  margin-bottom: 0.5rem;
  padding: 0 1.5rem;
`;

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme["brown-300"]};
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
`;

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 1.5rem 1.5rem 1.5rem;
  form {
    display: flex;
    gap: 0.5rem;

    input {
      padding: 0.5rem;
      background: ${(props) => props.theme["gray-400"]};
      border-radius: 6px;
      border: none;

      width: 4rem;

      font-size: 1rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme["purple-600"]};
      border: none;
      border-radius: 6px;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

export const CoffeePrice = styled.span`
  display: flex;

  font-size: 1rem;
  align-items: center;
  p {
    line-height: 1.3;
    font-size: 1.5rem;
    font-weight: bolder;
    font-family: "Baloo 2", cursive;
    margin-left: 0.25rem;

    color: ${(props) => props.theme["brown-600"]};
  }
`;
