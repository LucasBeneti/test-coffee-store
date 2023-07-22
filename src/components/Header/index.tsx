import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { HeaderWrapper } from "./style";
import logoCoffee from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logoCoffee} alt="" />
      <nav>
        <button>
          <MapPin size={22} weight="fill" />
          <span>Curitiba, PR</span>
        </button>
        <NavLink to="/">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderWrapper>
  );
};