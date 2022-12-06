
import { useEffect, useState } from 'react';

import { useFrameTime } from './useFrameTime';
import { FoodSilo, Potato } from './FieldItems';
import './styles.css';
import { wait } from '@testing-library/user-event/dist/utils';

export const Field = (props) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [dragging, setDragging] = useState(false);

	const [state, setState] = useState({});
	const [items, setItems] = useState([]);
	const [frameTime, setFrameTime] = useState();
	

	useEffect(() => {
		items.forEach(item => {
			item.age = (Date.now() - item.start);
		});
	});

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
    var data = e.dataTransfer.getData("text/plain");

		let item = {	
			x: e.clientX - offset.x, 
			y: e.clientY - offset.y,
			type: data,
			radius: 200,
			age: 0,
			start: Date.now() 
		};
		switch (data) {
			case 'foodSilo':
				item.capacity = 25;
				break;
			case 'potato':
				
				break;
		}

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
		switch (item.type) {
			case 'foodSilo':
				return <FoodSilo 	key={key}
													item={item}
													offset={offset}/>;
			case 'potato':
				return <Potato 	key={key}
											item={item}
											offset={offset}/>;
		}
	}
	return (<div 	id='field'
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



