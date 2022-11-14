
import React, { Component } from 'react';

import './styles.css';

class Item extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name ?? '{ unnamed item }' 
		}
	};

	render() {
		return (
			<div className='item'>
				<span className='sub'>-</span>
				<p>{ this.state.name }</p>
				<span className='add'>+</span>
			</div>
		);
	};
}

export default Item;

