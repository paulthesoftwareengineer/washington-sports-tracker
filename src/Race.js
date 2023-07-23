import React from 'react';

const Race = ({ race }) => {
  return (
    <div>
      <h2>{race.name}</h2>
      <p>Sport: {race.sport}</p>
      <p>Date: {race.date}</p>
    </div>
  );
};

export default Race;
