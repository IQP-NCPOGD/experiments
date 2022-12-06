

import { useState } from 'react';
import { act } from 'react-dom/test-utils';
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

export const Potato = (props) => {
	const [active, setActive] = useState(false);
	const { x, y, radius } = props.item;

	const handleClick = () => {
		setActive(!active);
	}

	const style = {
		left: (x - 50) + 'px', 
		top:	(y - 50) + 'px' 
	}

	return (<div className={'potato seedling'}
							 style={style}
							 onClick={ handleClick } >
						{ active &&
							<>
							<div className='menu'>
								<h1>Potato Plant</h1>
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

