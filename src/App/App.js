import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';

class App extends React.Component {
  // outside render - anything that modifies state
  componentDidMount() {
    // this function works on load
    const goats = goatData.getGoats();
  }

  render() {
    // inside render - anything we need to do to modify the user interface
    return (
      <div className="App">
        <h2>Goats</h2>
        <button className="btn btn-info">Tree</button>
      </div>
    );
  }
}

export default App;
