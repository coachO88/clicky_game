import React from 'react';

class Rotate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    var pics = this.props.imagelink.map((images, index) => {
      return (<div onClick={() => 
        this.props.random()} className="grid-item" key={index}><img onClick={() => 
            this.props.guess(images)} src={images} alt="friend" /></div>)
    })
    return (
      <div className="tiles">
        {pics}
      </div>
    );
    ;
  }
};

export default Rotate;