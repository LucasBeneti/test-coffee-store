import { HomeBanner } from "../../components/HomeBanner";
import { HomeWrapper, CoffeeListWrapper, CoffeeList } from "./style";
import { CoffeeCard } from "../../components/CoffeeCard";

interface ListedCoffee {
  id: string;
  name: string;
  price: number;
}
const HomePage = () => {
  const existingCoffees: ListedCoffee[] = [
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
