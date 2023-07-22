import { Package, ShoppingCart, Timer, Coffee } from "@phosphor-icons/react";
import {
  BannerWrapper,
  BannerInfo,
  BannerInfoTags,
  BannerInfoIconWrapper,
} from "./style";
import coffeeBannerImg from "../../assets/coffee-banner.png";

import { defaultTheme } from "../../styles/theme/default";
export const HomeBanner = () => {
  return (
    <BannerWrapper>
      <BannerInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
        <p>
          Com o café delivery você recebe seu café onde estiver, a qualquer hora
          do dia.
        </p>
        <BannerInfoTags>
          <span>
            <BannerInfoIconWrapper
              theme={{ bgColor: defaultTheme["yellow-600"] }}
            >
              <ShoppingCart size={16} weight="fill" fill="white" />
            </BannerInfoIconWrapper>
            Compra simples e segura
          </span>
          <span>
            <BannerInfoIconWrapper
              theme={{ bgColor: defaultTheme["brown-400"] }}
            >
              <Package size={16} weight="fill" fill="white" />
            </BannerInfoIconWrapper>
            Embalagem mantém o café intacto
          </span>
          <span>
            <BannerInfoIconWrapper
              theme={{ bgColor: defaultTheme["yellow-400"] }}
            >
              <Timer size={16} weight="fill" fill="white" />
            </BannerInfoIconWrapper>
            Entrega rápida e rastreada
          </span>
          <span>
            <BannerInfoIconWrapper
              theme={{ bgColor: defaultTheme["purple-400"] }}
            >
              <Coffee size={16} weight="fill" fill="white" />
            </BannerInfoIconWrapper>
            O café chega fresquinho até você
          </span>
        </BannerInfoTags>
      </BannerInfo>
      <img src={coffeeBannerImg} alt="" />
    </BannerWrapper>
  );
};
