import React, { Component } from 'react';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: props.beer
    }
  }
  render() {
    return (
      <div>
        <div className="card mb-5">
          <img src={this.state.beer.image_url} className="card-img-top mx-auto" />
          <div className="card-body">
            <h5 className="card-title">{this.state.beer.name}</h5>
            <h5 className="card-subtitle mb-2 text-muted">{this.state.beer.tagline}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First Brewed {this.state.beer.first_brewed}</li>
              <li className="list-group-item">ABV: {this.state.beer.abv}</li>
              <li className="list-group-item">{this.state.beer.description}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
