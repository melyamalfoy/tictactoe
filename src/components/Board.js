import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    // Set initial state for squares and the next player
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    /**
     * Handles a square click.
     * @param {number} i - The index of the clicked square.
     */
    const handleClick = (i) => {
        // If the square is already filled or the game has a winner, ignore the click
        if (squares[i] || calculateWinner(squares)) return;

        // Create a new copy of the squares array and update it with the new move
        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';

        // Update the state with the new squares array and toggle the next player
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    /**
     * Renders a square with the given index.
     * @param {number} i - The index of the square to render.
     * @returns {ReactElement} The rendered square component.
     */
    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    };

    // Determine the winner of the game or the next player
    const winner = calculateWinner(squares);
    let status;
    if (isXNext) {
        status = winner
            ? `Winner: ${winner}`
            : `Next player: ${'X'}`;
    } else {
        status = winner
            ? `Winner: ${winner}`
            : `Next player: ${'O'}`;
    }

    // Render the game board and status
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

/**
 * Calculates the winner of the game.
 * @param {Array} squares - The current state of the game board.
 * @returns {string|null} The winner ('X' or 'O') or null if there's no winner yet.
 */
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const element of lines) {
        const [a, b, c] = element;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;
