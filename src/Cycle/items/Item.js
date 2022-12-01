
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
	return ( 
		<div className='item foodSilo'>
			<p className='title'>Food Silo: </p>
			<div className='icon' draggable/>
		</div>
	);
}


