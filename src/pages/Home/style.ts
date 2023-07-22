import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-image: url("src/assets/banner-background.svg");
  padding: 5.75rem 10rem;
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60%;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const BannerInfoTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
