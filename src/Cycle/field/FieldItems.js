

import { useState } from 'react';
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
	const { x, y, radius, age, level } = props.item;
	const state = props.state;
	const setState = props.setState;
	const offset = props.offset;
	const capacity = level == 3 ? 100 : level == 2 ? 50 : 25;

	const handleClick = () => {
		setActive(!active);
	}

	
	const style = {
		left: (x + offset.x) + 'px', 
		top: (y + offset.y) + 'px' 
	}

	const Level = (props) => {
		const l = props.level;

		return (
		<div>
			<p className='key'>Level {l}:</p>
			<p className='value'>{
				level >= l 
			  ?	'+25 Capacity'
				: level != l - 1
				? 'Level ' + (l - 1) + ' Required'
				: '0/25 Food Units' 
			}</p>
		</div>);
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
									<Level level={1} />
									<Level level={2} />
									<Level level={3} />
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

