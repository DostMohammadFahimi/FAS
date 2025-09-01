import NewArraivals from "../components/Cart/NewArraivals";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArraivals />
    </div>
  );
};

export default Home;