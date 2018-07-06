import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import City from '../components/city';
import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
