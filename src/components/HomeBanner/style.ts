import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-image: url("src/assets/banner-background.svg");
  padding: 5.75rem 10rem;
  gap: 2rem;

  img {
    object-fit: cover;
  }
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

export const BannerInfoTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
  margin-top: 4.125rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BannerInfoIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  background: ${(props) => props.theme.bgColor};
  border-radius: 50%;
`;
