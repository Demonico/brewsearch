import React, { Component } from 'react';
import axios from 'axios';

// Import Components
import Header from './Header';
import Footer from './Footer';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Main extends Component {
  state = {
    beer: []
  };

  componentWillMount() {
    this.getBeers();
  };

  getBeers() {
    axios.get('https://api.punkapi.com/v2/beers/')
      .then(response => {
        this.setState({ beer: response.data }, () => {
          console.log(this.state);
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    const beerItems = this.state.beer.map((b) => {
      return (
        <div key={b.id} className="col-6 col-md-4">
          <SearchResults beer={b} />
          {/* <BeerModal beer={b} /> */}
        </div>
      )
    });
    return (
      <div>
        <Header />
        <div className="container">
          <SearchForm getBeers={this.getBeers} />
        </div>
        <div className="row">{beerItems}</div>
        <Footer />
      </div>
    )
  }
}

