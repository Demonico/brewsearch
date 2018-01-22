import React, { Component } from 'react';

// Import Components
import Header from './Header';
import Footer from './Footer';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchForm />        
        <Footer/>
      </div>
    )
  }
}

