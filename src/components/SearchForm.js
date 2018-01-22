import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

export default class SearchForm extends Component {
  state = {
    beer: []
  }

componentWillMount() {
  this.getBeers();
}

getBeers() {
  axios.get('https://api.punkapi.com/v2/beers/')
    .then(response => {
      this.setState({ beer: response.data }, () => {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
}

render() {
  const beerItems = this.state.beer.map((b, i) => {
    return (
      <div key={b.id} className="col-6 col-md-4">
        <SearchResults  beer={b} />
        {/* <BeerModal beer={b} /> */}
      </div>
    )
  })
  return (
    <div>
      <h1>Search</h1>   
      <div className="container">          
          <div className="row">{beerItems}</div>
      </div>
    </div>
  )
}
}
