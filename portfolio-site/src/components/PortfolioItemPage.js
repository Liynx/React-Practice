import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>Thing that ive done</h1>
    <p>this is a page for an item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;