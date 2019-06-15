import React from 'react';

class Clicky extends React.Component {
  render() {
    return (
      <div className="Clicky" >
        <h2 className="mainHeader">Californication Memory Game</h2>
        <div id="score">
            Score: {this.props.points}
        </div>
      </div>

    );
  }

};

export default Clicky;