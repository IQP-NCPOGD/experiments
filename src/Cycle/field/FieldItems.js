

import { useState } from 'react';
import './styles.css';

export const FieldObject = (props) => {
	if (props.type === 'potato') {
		return Potato(props);
	}

	const style = {
		left: (props.x - 50) + 'px', 
		top:	(props.y - 50) + 'px' 
	}

	return (<div className={props.type}
							 style={style}></div>);
}

export const FoodSilo = (props) => {
	const [active, setActive] = useState(false);
	const { x, y, radius, capacity } = props.item;
	const offset = props.offset;

	const handleClick = () => {
		setActive(!active);
	}

	const handleMenuClick = (e) => {
		 e.stopPropagation();
	}

	const style = {
		left: (x + offset.x) + 'px', 
		top: (y + offset.y) + 'px' 
	}

	
	return (<div className={'foodSilo'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'
								onClick={ handleMenuClick } >
								<h1>Food Silo</h1>
								<div className='info'>
									<p className='key'>Capacity:</p>
									<p className='value'>{capacity}</p>
								</div>
								<div className='levels'>
									<div className='one'>
										<p className='key'>Level 1:</p>
										<div className='value'></div>
									</div>
									<div className='two'>
										<p className='key'>Level 2:</p>
										<div className='value'></div>
									</div>
									<div className='three'>
										<p className='key'>Level 3:</p>
										<div className='value'></div>
									</div>
								</div>
							</div>
							<div className='radius'
									 style={{
										 width: 2 * radius + 'px'
									 }}>
							</div>
							</>
						}
					</div>);

}

export const Potato = (props) => {
	const [active, setActive] = useState(false);
	const { x, y, radius, age } = props.item;
	const offset = props.offset;

	const handleClick = () => {
		setActive(!active);
	}

	const style = {
		left: (x + offset.x) + 'px', 
		top: (y + offset.y) + 'px' 
	}

	let ageText = '';
	if (age >= 3600000) {
		ageText = Math.floor(age / 3600000) + 'h';
	}
	else if (age >= 60000) {
		ageText = Math.floor(age / 60000) + 'm'
	}
	else {
		ageText = Math.floor(age / 1000) + 's'
	}

	return (<div className={'potato seedling'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'>
								<h1>Potato Plant</h1>
								<div className='info'>
									<p className='key'>Age:</p>
									<p className='value'>{ageText}</p>
								</div>
							</div>
							<div className='radius'
									 style={{
										 width: 2 * radius + 'px'
									 }}>
							</div>
							</>
						}
					</div>);
}

