import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const Board = ({squares, click}) => {
	return (
		<div className='board'>
			{
				squares.map((square, i) => (
					<Square key={i} value={square} onClick={() => click(i)} />
				))
			}
		</div>
	);
}
Board.propTypes = {
	squares: PropTypes.array,
	click: PropTypes.func,
};

export default Board;
