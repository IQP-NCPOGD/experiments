
import { useState } from 'react';

import { FoodSiloItem } from '../items/Item';

import { FieldObject, Potato } from './FieldItems';
import './styles.css';

export const Field = (props) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [dragging, setDragging] = useState(false);

	const [items, setItems] = useState([]);	

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
    var data = e.dataTransfer.getData("text/plain");
		
		const field = document.getElementById('field');
	

		//console.log(e);
		const item = {	
			x: e.clientX, 
			y: e.clientY,
			type: data,
			radius: 200
		};

		let drop = true;
		items.forEach(i => {
			const dx = i.x - item.x;
			const dy = i.y - item.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			console.log(dist + ' < ' + (item.radius + i.radius));
			if (dist < (item.radius + i.radius)) {
				drop = false;
			}
		});
		if (drop) {
			items.push(item);
		}
	};

	const handleDrag = (e) => {
		if (!dragging) {
			return;
		}

		setOffset({ x: offset.x + e.movementX, y: offset.y + e.movementY });
	}
	const handleDragStart = (_) => {
		setDragging(true);	
	}
	const handleDragEnd = (_) => {
		setDragging(false);
	}
	const itemToFieldObject = (item, key) => {
		if (item.type === 'potato') {
			return <Potato 	key={key}
											item={item} />;
		}
		return (<FieldObject 	key={key} 
													x={ item.x } 
													y={ item.y } 
													type={item.type} />);
	}
	
	return (
				
				<div 	id='field'
							className='field' 
							onDrop={event => handleDrop(event)}
							onDragOver={event => handleDragOver(event)}
							onMouseDown={event => handleDragStart(event)}
							onMouseUp={event => handleDragEnd(event)}
							onMouseMove={event => handleDrag(event)} >
					{
						items && items.map(itemToFieldObject)
					}
				</div>

	);


}



