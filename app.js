import React from 'react';
import RaceList from './RaceList';

class App extends React.Component {
  state = {
    races: [
      { id: 1, name: 'Seattle Marathon', sport: 'Running', date: '2023-09-12'},
      { id: 2, name: 'Ironman Coeur d’Alene', sport: 'Triathlon', date: '2023-07-30'},
      // More races...
    ],
  };

  render() {
    return (
      <div>
        <h1>Washington Sports Tracker</h1>
        <RaceList races={this.state.races} />
      </div>
    );
  }
}

export default App;
