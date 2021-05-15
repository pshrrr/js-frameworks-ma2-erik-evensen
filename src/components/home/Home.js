import BeerList from "../beers/BeerList";
import Heading from "../layout/Heading";

export default function Home() {
  return (
    <>
      <div>
        <Heading title={"Home"} />
      </div>
      <div>
        <BeerList />;
      </div>
    </>
  );
}
