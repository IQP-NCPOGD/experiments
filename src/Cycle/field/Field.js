
import { useEffect, useState } from 'react';

import { FoodSilo, Potato, Denitrifier } from './FieldItems';
import './styles.css';

const getCapacity = (items) => {
	let capacity = 0;
	items.forEach(item => {
		if (item.type === 'foodSilo') {
			let level = item.level;
			capacity += level == 3 ? 100 : level == 2 ? 50 : 25;
		}
	});
	return capacity;
}

export const Field = (props) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [dragging, setDragging] = useState(false);

	const [state, setState] = useState({
		food: 0
	});
	const [items, setItems] = useState([]);
	const [frameTime, setFrameTime] = useState();
	const [foodMenuActive, setFoodMenuActive] = useState(false);

	useEffect(() => {
		items.forEach(item => {
			item.age = (Date.now() - item.start);
		});
	});
	useEffect(() => {
		if (state.food > getCapacity(items)) {
			let ns = state;
			ns.food = getCapacity(items);
			setState(ns);
		}
	});

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
    var data = e.dataTransfer.getData("text/plain");

		let item = {	
			x: e.clientX - offset.x - 50, 
			y: e.clientY - offset.y - 50,
			type: data,
			radius: 200,
			age: 0,
			start: Date.now() 
		};
			switch (data) {
			case 'foodSilo':
				item.level = 1;
				break;
			case 'potato':
				//potatoes per minute
				item.ppm = 5;
				item.radius = 100;

				setInterval(() => {
					const newState = state;
					newState.food += item.ppm / 60;
					setState(newState);

					//console.log('food:', state.food);
				}, 1000);
				break;
			case 'denitrifier':
				
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
													state={state}
													setState={setState}
													offset={offset}/>;
			case 'potato':
				return <Potato 	key={key}
											item={item}
											offset={offset}/>;
			case 'denitrifier':
				return <Denitrifier 	key={key}
												item={item}
												offset={offset}/>;

		}
	}
	const handleFoodMenu = () => {
		setFoodMenuActive(!foodMenuActive);
	}


	return (<div 	id='field'
							className='field' 
							onDrop={event => handleDrop(event)}
							onDragOver={event => handleDragOver(event)}
							onMouseDown={event => handleDragStart(event)}
							onMouseUp={event => handleDragEnd(event)}
							onMouseMove={event => handleDrag(event)} >
					<div className={'menu food' + (foodMenuActive ? ' active' : '') }
							onClick={handleFoodMenu}>
						<h1>Food: {Math.floor(state.food)}</h1>
						<CapacityData items={items} />
						<PotatoPlantData items={items} />
					</div>
					<div className='items'>
						{ items && items.map(itemToFieldObject) }
					</div>
				</div>

	);
}

const PotatoPlantData = (props) => {
		const potatoes = props.items.filter(item=>item.type==='potato');
		const count = potatoes.length;
		let  ppm = 0;
		potatoes.forEach(p=>{ ppm+=p.ppm; });

		return (
			<p className='ppd'>
				You have {count} potato plants producing {ppm} potatoes per minute.	
			</p>
		);
	}

const CapacityData = (props) => {
	const foodSilos = props.items.filter(item=>item.type==='foodSilo');
	const count = foodSilos.length;
	let  cap = getCapacity(props.items); 
	return (
		<p className='ppd'>
			You have {count} food silos making up a total capacity of {cap}.	
		</p>
	);
}



