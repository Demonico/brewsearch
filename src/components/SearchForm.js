import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      searchType: 'beer_name',
      sortList: 'none',
      error: ''
    };
  }

  onChange
  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // onSort
  onSort = (e) => {
    const sortList = e.target.value;
    this.setState({ sortList });
    this.props.sortList(sortList);
  };
  // onSubmit
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.searchType)
    if (!this.state.searchField) {
      this.setState(() => ({ error: 'Please enter a search term.' }));
    } else {
      this.setState(() => ({ error: '' }));
      const searchParams = {
        searchField: this.state.searchField,
        searchType: this.state.searchType
      };
      this.props.getBeers(searchParams);
    }
  };

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="mb-5">
          <div className="input-group mb-3 row">
            <input
              className="form-control-lg col"
              type="text"
              name="searchField"
              placeholder="Search"
              value={this.state.searchField}
              onChange={this.handleInputChange}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-success btn-lg">Search</button>
            </div>
          </div>
          <div className="row">
            <div className="form-check form-check-inline col-sm-3 mx-auto">
              <div className="form-group">
                <label className="form-check-label">
                  <input
                    className="form-check-input "
                    type="radio"
                    value="beer_name"
                    name="searchType"
                    checked
                    onChange={this.handleInputChange}
                  />
                  Search by beer name.</label>
              </div>
            </div>
            <div className="form-check form-check-inline col-sm-3 mx-auto">
              <div className="form-group">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="food"
                    name="searchType"
                    onChange={this.handleInputChange}
                  />
                  Search by food pairing.</label>
              </div>
            </div>
            <div className="input-group mb-3 col-sm-3 mx-auto">
              <label htmlFor="sortList">Sort By:
              <select
                  className="ml-1"
                  name="sortList"
                  value={this.state.sortList}
                  onChange={this.onSort}
                >
                  <option value="none">None</option>
                  <option value="name">Beer Name</option>
                  <option value="first_brewed">First Brewed Date</option>
                  <option value="abv">Alcohol by Volume</option>
                </select>
              </label>
            </div>
          </div>

        </form>
      </div>
    )
  }
}