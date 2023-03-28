import React from 'react';

/**
 Represents an individual square on the Tic Tac Toe board.
 @param {Object} props - The properties passed to the component.
 @param {string} props.value - The value of the square ('X', 'O', or null).
 @param {function} props.onClick - The click event handler for the square.
 @returns {ReactElement} The rendered square component.
 */
const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};
export default Square;
