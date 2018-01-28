import React, { Component } from 'react';
import axios from 'axios';

// Import Components
import Header from './Header';
import Footer from './Footer';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Main extends Component {
  constructor() {
    super();
    this.getBeers = this.getBeers.bind(this);
    this.sortList = this.sortList.bind(this);
    this.state = {
      beer: []
    };
  }


  componentWillMount() {
    this.getBeers();
  };

  getBeers(searchParams = {}) {
    console.log(searchParams);
    const baseURL = 'https://api.punkapi.com/v2/beers/';
    // asign value of each entry
    const { searchField = '', searchType = 'beer_name' } = searchParams;
    // conditionally change search url
    const searchText = searchField.split(' ').join('_');
    const searchURL = `${baseURL}?${searchType}=${searchText}`
    console.log(searchURL);
    if (searchText !== '') {
      axios.get(searchURL)
        .then(response => {
          this.setState({ beer: response.data })
        })
        .catch(err => console.log(err));
    }
  };

  // function for dynamic number or string sorting
  compareValues(key, order = 'asc') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  // date sort
  dateSort (key) {
    return (a, b) => {
      const varA = new Date('01/' + a[key]);
      const varB = new Date('01/' + b[key]);
      return varA < varB ? -1 : varA > varB ? 1 : 0;
    }
  }
  

  sortList(sort) {
    if (sort !== 'none') {
      sort === 'first_brewed' ? 
      this.setState(this.state.beer.sort(this.dateSort(sort))) : 
      this.setState(this.state.beer.sort(this.compareValues(sort)));
    }
  }

  render() {
    const beerItems = this.state.beer.map((b) => {
      return (
        <div key={b.id} className="col-6 col-md-4">
          <SearchResults beer={b} />
          {/* <BeerModal beer={b} /> */}
        </div>
      )
    })
    return (
      <div>
        <Header />
        <div className="container">
          <SearchForm
            getBeers={this.getBeers}
            sortList={this.sortList}
          />
        </div>
        <div className="row">{beerItems}</div>
        <Footer />
      </div>
    )
  }
}

