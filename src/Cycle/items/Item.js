
import React, { Component } from 'react';

import './styles.css';

class Item extends React.Component {
	
	constructor(props) {
		super(props);

    //tohis.handleClick = this.handleClick.bind(this);
		
		this.state = {
			name: this.props.name ?? '{ unnamed item }' 
		}
	};

	render() {
		return (
			<div className='item'>
				<div className='sub' onClick={(e) => this.props.onSub(e)}>-</div>
				<p>{ this.state.name }</p>
				<div className='add' onClick={(e) => this.props.onAdd(e)}>+</div>
			</div>
		);
	};
}

export default Item;

