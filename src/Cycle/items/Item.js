
import { useState } from 'react';

import './styles.css';

const Item = (props) => { 
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

export default Item;

