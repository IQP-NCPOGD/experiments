import React, { Component } from 'react';
//import { ScrollView } from 'react-native';
import { FoodSiloItem, PotatoItem, DenitrifierItem, AmmoniumSiloItem } from './items/Item';
import { Field } from './field/Field';
import './styles.css';

class Cycle extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hour:   0,
			farms:	0,
			foodSilos: 0,
			dentrifiers: 0,
			statues: 0,
			ammoniaSilos: 0,
			ponds: 0,
			trees: 0,
			flowers: 0,
			nbc: 0,
			dbc: 0,
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
				<Field />	
				<div className="items">
          <FoodSiloItem/>
          <DenitrifierItem/>
          <PotatoItem/>
          <AmmoniumSiloItem/>
  			</div>
      </div>
    );
  };

}


export default Cycle;

