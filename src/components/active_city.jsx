import React from 'react';

const ActiveCity = (props) => {
  const { name, address, slug } = props.city;
  return (
    <div className="active-city">
      <h1>{name}</h1>
      <p>{address}</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} alt=""/>
    </div>
  );
};

export default ActiveCity;
