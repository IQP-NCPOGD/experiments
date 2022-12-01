
import { useState } from 'react';

import { FoodSiloItem } from '../items/Item';

import './styles.css';





export const Field = (props) => {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [items, setItems] = useState([]);	

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		console.log('drop');
		items.push({x: e.clientX, y: e.clientY});
		console.log(items);
	};

	const foodSilo = (pos, key) => {
		const field = document.getElementById('field');
		let x = 0;
		let y = 0;

		if (field) {
			x = field.clientLeft + 50;
			y = field.clientTop + 50;
		}
		const style = {
			left: pos.x - x,
			top:	pos.y - y
		}

		return (<div 	key={key} 
									className='foodSilo'
									style={style}></div>);
	}

	return (
				<div 	id='field'
							className="field" 
							onDrop={event => handleDrop(event)}
							onDragOver={event => handleDragOver(event)}>
					{
						items && items.map(foodSilo)
					}
				</div>

	);


}



