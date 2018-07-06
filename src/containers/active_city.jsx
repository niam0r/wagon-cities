import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.selectedCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
  // debugger
  const { name, address, slug } = props.selectedCity;

  return (
    <div className="active-city">
      <h3>{name}</h3>
      <p>{address}</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} alt="" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
