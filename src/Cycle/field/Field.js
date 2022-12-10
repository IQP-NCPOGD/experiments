
import { useEffect, useState } from 'react';

import { FoodSilo, Potato, Denitrifier, AmmoniumSilo } from './FieldItems';
import './styles.css';


// This function loops through all field items and sums up all the foodSilo capacities to find the total capacity.
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

// This is the field functional component that Cycle.js uses.
export const Field = (props) => {
	//offset is used for panning the field
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	//dragging is used for panning the field
	const [dragging, setDragging] = useState(false);

	//state is where all of hte game state statistics are held
	const [state, setState] = useState({
		food: 0
	});
	//items are where all of the current field items are held
	const [items, setItems] = useState([]);

	//foodMenuActive is used to determine if the FoodMenu is large or not
	const [foodMenuActive, setFoodMenuActive] = useState(false);

	// this will update each item's age
	useEffect(() => {
		items.forEach(item => {
			item.age = (Date.now() - item.start);
		});
	});

	// this makes sure the food doesn't exceed the capacity
	useEffect(() => {
		if (state.food > getCapacity(items)) {
			let ns = state;
			ns.food = Math.floor(getCapacity(items));
			setState(ns);
		}
	});

	// dragging/panning: don't send event ot children
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// handle drop: fires when a new item is dropped on the field
	const handleDrop = (e) => {
		// this data is a string that I send from the Items menu in Cycle.js
		// Possible values are: 'foodSilo', 'potato', 'denitrifier', 'ammoniumSilo'
    var data = e.dataTransfer.getData("text/plain");

		// this sets up the foundation of the item object
		// this will be added to the items list which will be added to the field
		let item = {	
			x: e.clientX - offset.x - 50, // e.clientX = mouse position
			y: e.clientY - offset.y - 50, // e.clientY = mouse position 
			type: data,										
			radius: 200,									
			age: 0,
			start: Date.now() 
		};

		// add specific values depending on the item type
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
			case 'ammoniumSilo':
				break;
		}
	
		// this code checks the drop radii
		let drop = true;
		items.forEach(i => {
			const dx = i.x - item.x;
			const dy = i.y - item.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			//console.log(dist + ' < ' + (item.radius + i.radius));
			if (dist < (item.radius + i.radius)) {
				drop = false;
			}
		});


		if (drop) {
			items.push(item);
			setItems(items);
		}
	};

	// handles panning/dragging
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
	// this converts an item object to a react component
	// these are imported from FieldItem.js
	const itemToFieldObject = (item, key) => {
		switch (item.type) {
			case 'foodSilo':
				return <FoodSilo 	key={key}
													item={item}
													state={state}
													offset={offset}
													upgrade={() => {
														item.level++;
														if (item.level == 3) {
															state.food -= 25;
														}
														state.food -= 25;
														setState(state);
													}}/>;
			case 'potato':
				return <Potato 	key={key}
												item={item}
												offset={offset}/>;
			case 'denitrifier':
				return <Denitrifier key={key}
														item={item}
														offset={offset}/>
			case 'ammoniumSilo':
				return <AmmoniumSilo key={key}
														 item={item}
														 offset={offset}/>;

		}
	}
	// toggle food menu
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
						{ 
							// this line first checks if items exists
							// if it does it will then map each item to the itemToFieldObject function
							// this will return an array of react components that will be rendered
							// essentially this line displays all items on the field based on their item obect data.
							items && items.map(itemToFieldObject) 
						}
					</div>
				</div>

	);
}

// gives more context to potato production
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

// gives more context to the total capacity
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



