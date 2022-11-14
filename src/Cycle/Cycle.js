import React, { Component } from 'react';
import Item from './items/Item';

import './styles.css';

class Cycle extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hour:   0,
      food:   0,
      n2:     50,
      runoff: 0 
    }
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }; 

  componentWillUnmount() {
    clearInterval(this.timerID);  
  };

  tick() {    
    this.setState({      
      hour: this.state.hour + 1  
    });
  };

  render () {
    return (
      <div className="main">
        <div className="items">
          <h1> Items: </h1>
          <Item name="Tree"></Item>
			</div>
        <div className="data">
          <h1> Data: </h1>
          <p>Food: { this.state.food } </p>  
          <p>Hour: { this.state.hour } </p>  
          <p>Nitrogen Content: { this.state.n2} </p>  
          <p>Runoff: { this.state.runoff } </p>  
        </div>
      </div>
    );
  };

}


export default Cycle;

