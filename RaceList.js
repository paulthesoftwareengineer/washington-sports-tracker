import React from 'react';
import Race from './Race';

const RaceList = ({ races }) => {
  return (
    <div>
      {races.map(race => (
        <Race key={race.id} race={race} />
      ))}
    </div>
  );
};

export default RaceList;
