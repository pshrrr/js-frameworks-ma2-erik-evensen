import { useState, useEffect } from "react";
import { API } from "../constants/api";
import BeerCard from "./BeerCard";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setBeers(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="beergrid">
      {beers.map(function (beer) {
        return <BeerCard key={beer.id} beer={beer} />;
      })}
    </div>
  );
}

export default BeerList;
