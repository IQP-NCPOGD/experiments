
import { useState } from 'react';

import './styles.css';
//import foodSilo1 from '../assets/silo.svg'; 

export const Item = (props) => { 
	const [count, setCount] = useState(0);
	return (
		<div className='item'>
			<div className='sub' onClick={() => { setCount(count - 1); props.onChange(count - 1); } }>-</div>
			<div className='content'>
				<h1>{ count + ' ' + props.name }</h1>
			</div>
			<div className='add' onClick={() => { setCount(count + 1); props.onChange(count + 1); } }>+</div>
		</div>
	);
};

export const FoodSiloItem = (props) => {
	const handleDrag = (e) => {
		e.dataTransfer.setData('text/plain', 'foodSilo');
	};

	return ( 
		<div className='item foodSilo'>
			<p className='title'>Food Silo: </p>
			<div className='icon' onDragStart={handleDrag} draggable/>
		</div>
	);
}
export const Denitrifier = (props) => {
	const handleDrag = (e) => {
		e.dataTransfer.setData('text/plain', 'denitrifier');
	};

	return ( 
		<div className='item denitrifier'>
			<p className='title'>Denitrifier: </p>
			<div className='icon' onDragStart={handleDrag} draggable/>
		</div>
	);
}

export const PotatoItem = (props) => {
	const handleDrag = (e) => {
		e.dataTransfer.setData('text/plain', 'potato');
	};

	return (
		<div className='item potato'>
			<p className='title'>Potato Plant: </p>
			<div className='icon' onDragStart={handleDrag} draggable/>
		</div>
	);
}
