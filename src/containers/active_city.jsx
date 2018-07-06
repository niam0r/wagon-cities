import React from 'react';

const ActiveCity = (props) => {
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
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
