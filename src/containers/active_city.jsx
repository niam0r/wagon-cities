import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const { name, address, slug } = props.city;
  return (
    <div className="active-city">
      <h3>{name}</h3>
      <p>{address}</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} alt=""/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ set }, dispatch);
}

export default connect(mapStateToProps)(ActiveCity);
