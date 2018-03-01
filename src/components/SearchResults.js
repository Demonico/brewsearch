import React, { Component } from 'react';

const SearchResults = (props) => {
  // openModal = () => {
  //   this.props.openModal(props.beer)
  // };
  return (

    <div>
      <div className="card mb-5">
        <img src={props.beer.image_url} className="card-img-top mx-auto" />
        <div className="card-body">
          <h3 className="card-title text-white">{props.beer.name}</h3>
          <h5 className="card-subtitle mb-2 text-white">{props.beer.tagline}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">First Brewed {props.beer.first_brewed}</li>
            <li className="list-group-item">ABV: {props.beer.abv}</li>
            <li className="list-group-item">{props.beer.description}</li>
            <li className="list-group-item">
              {/* <button
                className="btn btn-info"
                onClick={this.openModal}
              >
                More Details
            </button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;