import React from 'react';
import './GoatCorale.scss';

import Goat from '../Goat/Goat';

class GoatCorale extends React.Component {
  render() {
    const { goats } = this.props;
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat}/>
    ));

    return (
      <div className="GoatCorale d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorale;
