

import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import './styles.css';

const handleMenuClick = (e) => {
		 e.stopPropagation();
	}

const getAgeText = (age) => {
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
	return ageText;
}
	const Level = (props) => {
		const { displayLevel, trueLevel, upgrade, state } = props;
		const active = trueLevel == displayLevel - 1 && (state.food >= (displayLevel == 3 ? 50 : 25))

		const handleUpgrade = () => {
			if (active) {
				upgrade();
			}
		}

		return (
		<div>
			<p className='key'>Level {displayLevel}:</p>
			<p className={'value' + (active ? ' active' : '')}
				 onClick={handleUpgrade} >{
				trueLevel >= displayLevel 
			  ?	displayLevel == 3 ? '+50 Capacity' : '+25 Capacity'
				: trueLevel != displayLevel - 1
				? 'Level ' + (displayLevel - 1) + ' Required'
				: (Math.floor(state.food)) + '/' + (displayLevel==3 ? '50' : '25') + ' Food Units' 
			}</p>
		</div>);
	}


export const FoodSilo = (props) => {
	const [active, setActive] = useState(false);
	const { state, item, offset, upgrade } = props;
	const { x, y, radius, age, level } = item;
	const capacity = level == 3 ? 100 : level == 2 ? 50 : 25;
	
	const handleClick = () => {
		setActive(!active);
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
									<p className='key'>Age:</p>
									<p className='value'>{getAgeText(age)}</p>
								</div>
							<div className='info'>
									<p className='key'>Capacity:</p>
									<p className='value'>{capacity}</p>
								</div>
								<div className='levels'>
									{	[1,2,3].map((dl, key) => <Level key={key} displayLevel={dl} trueLevel={level} upgrade={upgrade} state={state} />) }
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
export const Denitrifier = (props) => {
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

	return (<div className={'denitrifier'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'
										onClick={ handleMenuClick } >
								<h1>Denitrifier</h1>
								<div className='info'>
									<p className='key'>Age:</p>
									<p className='value'>{getAgeText(age)}</p>
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
export const AmmoniumSilo = (props) => {
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

	return (<div className={'ammoniumSilo'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'
										onClick={ handleMenuClick } >
								<h1>Ammonium Silo</h1>
								<div className='info'>
									<p className='key'>Age:</p>
									<p className='value'>{getAgeText(age)}</p>
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
	const { x, y, radius, age, ppm } = props.item;
	const offset = props.offset;

	const handleClick = () => {
		setActive(!active);
	}

	const style = {
		left: (x + offset.x) + 'px', 
		top: (y + offset.y) + 'px' 
	}


	return (<div className={'potato seedling'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'
										onClick={ handleMenuClick } >

								<h1>Potato Plant</h1>
								<div className='info'>
									<p className='key'>Age:</p>
									<p className='value'>{getAgeText(age)}</p>
								</div>
							<div className='info'>
									<p className='key'>PPM:</p>
									<p className='value'>{ppm}</p>
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

