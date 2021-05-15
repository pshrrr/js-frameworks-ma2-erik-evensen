import React from "react";
import PropTypes from "prop-types";

function BeerCard({ beer }) {
  return (
    <div className="card">
      <div>
        <img src={beer.image_url} alt="beer" />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
      </div>
    </div>
  );
}

export default BeerCard;

BeerCard.propTypes = {
  beer: PropTypes.any,
};
