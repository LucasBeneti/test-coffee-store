import { HomeBanner } from "../../components/HomeBanner";
import { CoffeeOrder } from "../../contexts/CartContext";
import { HomeWrapper, CoffeeListWrapper, CoffeeList } from "./style";
import { CoffeeCard } from "../../components/CoffeeCard";

const HomePage = () => {
  const existingCoffees: CoffeeOrder[] = [
    { id: "1", name: "Expresso Tradicional", price: 8.9 },
  ];
  return (
    <HomeWrapper>
      <HomeBanner />
      <CoffeeListWrapper>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {existingCoffees.map((coffeeOption) => {
            return (
              <CoffeeCard
                key={coffeeOption.id}
                id={coffeeOption.id}
                name={coffeeOption.name}
                price={coffeeOption.price}
              />
            );
          })}
        </CoffeeList>
      </CoffeeListWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
