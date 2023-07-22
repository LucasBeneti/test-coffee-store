import {
  BannerInfo,
  BannerInfoTags,
  BannerWrapper,
  HomeWrapper,
} from "./style";
import coffeeBannerImg from "../../assets/coffee-banner.png";
const HomePage = () => {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <BannerInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
          <p>
            Com o café delivery você recebe seu café onde estiver, a qualquer
            hora do dia.
          </p>
          <BannerInfoTags>
            <span>Compla simples e segura</span>
            <span>embalagem mantém o cagé intacto</span>
            <span>Compla simples e segura</span>
            <span>embalagem mantém o cagé intacto</span>
          </BannerInfoTags>
        </BannerInfo>
        <img src={coffeeBannerImg} alt="" />
      </BannerWrapper>
      <div>lista de cafés disponíveis</div>
    </HomeWrapper>
  );
};

export default HomePage;
