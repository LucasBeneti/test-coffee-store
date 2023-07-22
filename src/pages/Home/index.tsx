import { HomeBanner } from "../../components/HomeBanner";
import { HomeWrapper, CoffeeListWrapper, CoffeeList } from "./style";
import { CoffeeCard } from "../../components/CoffeeCard";

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <CoffeeListWrapper>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </CoffeeListWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
