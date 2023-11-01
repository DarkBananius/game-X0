import React from 'react';
import './Square.css';
import PropTypes from 'prop-types';


const Square = (props) => {
	return (
		<button className='square' onClick={props.onClick}>{props.value}</button>
	);
}

Square.propTypes = {
	props: PropTypes.element,
};
export default Square;
