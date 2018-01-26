import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const SearchForm = ({
  values,
  handleChange
}) => (
  <div>
    <Form className="row">
      <div className="input-group mb-3">
        <Field
          className="form-control-lg col"
          type="text"
          name="searchField"
          placeholder="Search"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-success btn-lg">Search</button>
        </div>
      </div>
      <div className="form-group col">
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field
              className="form-check-input form-control-lg"
              type="radio"
              value="beer"
              name="searchType"
              checked={values.searchType === "beer"}
            />
            Search by beer name.</label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field
              className="form-check-input form-control-lg"
              type="radio"
              value="food"
              name="searchType"
              checked={values.searchType === "food"}
            />
            Search by food pairing.</label>
        </div>
      </div>
      <div className="input-group mb-3 col">
        <Field
          component="select"
          name="sortList"
          className="form-control-lg"
        >
          <option value="none">None</option>
          <option value="beerName">Beer Name</option>
          <option value="brewDate">First Brewed Date</option>
          <option value="abv">Alcohol by Volume</option>
        </Field>
      </div>
    </Form>
  </div>
)

const FormikSearch = withFormik({
  mapPropsToValues({ searchField, searchType, sortList }) {
    return {
      searchField: searchField || '',
      searchType: searchType || 'beer',
      sortList: sortList || 'none'
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(SearchForm)

export default FormikSearch;
