import React from 'react';
//import { ScrollView } from 'react-native';
import { FoodSiloItem, PotatoItem, DenitrifierItem, AmmoniumSiloItem } from './items/Item';
import { Field } from './field/Field';
import './styles.css';

const Cycle = (props) => {
  
	return (
	 	<div className="main">
			<Field /> { /*  this field object is where the game logic is held  */ }	
			<div className="items">
				{ /*

				These items are the draggable/placeable items in the menu
				These are not items on the playing field

				*/ }
      	<FoodSiloItem/>
      	<DenitrifierItem/>
      	<PotatoItem/>
      	<AmmoniumSiloItem/>
			</div>
		</div>
	);

};


export default Cycle;

