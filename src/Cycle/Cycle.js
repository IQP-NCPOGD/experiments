import React, { Component } from 'react';
import Item from './items/Item';

import './styles.css';

class Cycle extends React.Component {
  
  constructor(props) {
    super(props);

		this.onAdd = this.onAdd.bind(this);
		this.onSub = this.onSub.bind(this);

    this.state = {
      hour:   0,
      food:   0,
			farms: 	0,
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

	onAdd(e) {
		this.setState({
			farms: this.state.farms + 1
		});
	};

	onSub(e) {
		this.setState({
			farms: this.state.farms - 1
		});
	};

  render () {
    return (
      <div className="main">
        <div className="items">
          <h1> Items: </h1>
          <Item name="Farms" onAdd={this.onAdd} onSub={this.onSub}></Item>
			</div>
        <div className="data">
          <h1> Data: </h1>
          <p>Food: { this.state.food } </p>  
          <p>Farms: { this.state.farms } </p>  
          <p>Hour: { this.state.hour } </p>  
          <p>Nitrogen Content: { this.state.n2 } </p>  
          <p>Runoff: { this.state.runoff } </p>  
        </div>
      </div>
    );
  };

}


export default Cycle;

