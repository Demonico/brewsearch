import React, { Component } from 'react';

const SearchResults = (props) => (
  <div>
    <div className="card mb-5">
      <img src={props.beer.image_url} className="card-img-top mx-auto" />
      <div className="card-body">
        <h5 className="card-title">{props.beer.name}</h5>
        <h5 className="card-subtitle mb-2 text-muted">{props.beer.tagline}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">First Brewed {props.beer.first_brewed}</li>
          <li className="list-group-item">ABV: {props.beer.abv}</li>
          <li className="list-group-item">{props.beer.description}</li>
        </ul>
      </div>
    </div>
  </div>
)

export default SearchResults;