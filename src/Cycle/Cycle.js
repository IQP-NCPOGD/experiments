import React, { Component } from 'react';
//import { ScrollView } from 'react-native';
import Item  from './items/Item';
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
        <div className="items">
          <h1> Items: </h1>
          <Item name="Farms" onChange={(c) => { this.setState({farms: c}); } } />
          <Item name="Food Silos" onChange={(c) => { this.setState({foodSilos: c}); } } />
          <Item name="Dentrifiers" onChange={(c) => { this.setState({dentrifiers: c}); } } />
          <Item name="Statues" onChange={(c) => { this.setState({statues: c}); } } />
          <Item name="Ammonia Silos" onChange={(c) => { this.setState({ammoniaSilos: c}); } } />
					<Item name="Ponds" onChange={(c) => { this.setState({ponds: c}); } } />
					<Item name="Trees" onChange={(c) => { this.setState({trees: c}); } } />
					<Item name="Flowers" onChange={(c) => { this.setState({flowers: c}); } } />
					<Item name="Nitrifying Bacteria Concentration" onChange={(c) => { this.setState({nbc: c}); } } />
					<Item name="Denitrifying Bacteria Concentration" onChange={(c) => { this.setState({dbc: c}); } } />

			</div>
        <div className="data">
          <h1> Data: </h1>
          <p>Food: { this.state.food } </p>  
          <p>Hour: { this.state.hour } </p>  
          <p>Nitrogen Content: { this.state.n2 } </p>  
          <p>Runoff: { this.state.runoff } </p>  
        </div>
      </div>
    );
  };

}


export default Cycle;

