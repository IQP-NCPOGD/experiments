
import './styles.css';

const Item = (props) => {
	const { type, title } = props;
	const handleDrag = (e) => {
		e.dataTransfer.setData('text/plain', type);
	};

	return ( 
		<div className={'item ' + type}>
			<p className='title'>{title}</p>
			<div className='icon' onDragStart={handleDrag} draggable/>
		</div>
	);
}

export const FoodSiloItem = (_) => (<Item type='foodSilo' title='Food Silo'/>);
export const PotatoItem = (_) => (<Item type='potato' title='Potato Plant'/>);
export const DenitrifierItem = (_) => (<Item type='denitrifier' title='Denitrifier'/>);
export const AmmoniumSiloItem = (_) => (<Item type='ammoniumSilo' title='Ammonium Silo'/>);

