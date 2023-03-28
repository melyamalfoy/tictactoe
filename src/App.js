import React from 'react';
import './App.css';
import Board from './components/Board';

/**
 * The main App component that renders the Tic Tac Toe game.
 * @returns {ReactElement} The rendered app component.
 */
const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Tic Tac Toe</h1>
            </header>
            <main>
                <Board />
            </main>
        </div>
    );
};

export default App;
