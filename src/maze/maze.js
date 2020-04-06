import React, { Component } from 'react';
import Block from '../block/block';
import './maze.css';

const mockMaze = { "blocks": [[{ "color": "WHITE", "x": 0, "y": 0 }, { "color": "WHITE", "x": 0, "y": 1 }, { "color": "WHITE", "x": 0, "y": 2 }, { "color": "GREEN", "x": 0, "y": 3 }, { "color": "WHITE", "x": 0, "y": 4 }, { "color": "WHITE", "x": 0, "y": 5 }, { "color": "WHITE", "x": 0, "y": 6 }, { "color": "GREEN", "x": 0, "y": 7 }, { "color": "WHITE", "x": 0, "y": 8 }, { "color": "WHITE", "x": 0, "y": 9 }, { "color": "WHITE", "x": 0, "y": 10 }], [{ "color": "GREEN", "x": 1, "y": 0 }, { "color": "GREEN", "x": 1, "y": 1 }, { "color": "WHITE", "x": 1, "y": 2 }, { "color": "GREEN", "x": 1, "y": 3 }, { "color": "WHITE", "x": 1, "y": 4 }, { "color": "GREEN", "x": 1, "y": 5 }, { "color": "WHITE", "x": 1, "y": 6 }, { "color": "GREEN", "x": 1, "y": 7 }, { "color": "WHITE", "x": 1, "y": 8 }, { "color": "GREEN", "x": 1, "y": 9 }, { "color": "WHITE", "x": 1, "y": 10 }], [{ "color": "WHITE", "x": 2, "y": 0 }, { "color": "WHITE", "x": 2, "y": 1 }, { "color": "WHITE", "x": 2, "y": 2 }, { "color": "GREEN", "x": 2, "y": 3 }, { "color": "WHITE", "x": 2, "y": 4 }, { "color": "GREEN", "x": 2, "y": 5 }, { "color": "WHITE", "x": 2, "y": 6 }, { "color": "WHITE", "x": 2, "y": 7 }, { "color": "WHITE", "x": 2, "y": 8 }, { "color": "GREEN", "x": 2, "y": 9 }, { "color": "WHITE", "x": 2, "y": 10 }], [{ "color": "WHITE", "x": 3, "y": 0 }, { "color": "GREEN", "x": 3, "y": 1 }, { "color": "GREEN", "x": 3, "y": 2 }, { "color": "GREEN", "x": 3, "y": 3 }, { "color": "GREEN", "x": 3, "y": 4 }, { "color": "GREEN", "x": 3, "y": 5 }, { "color": "WHITE", "x": 3, "y": 6 }, { "color": "GREEN", "x": 3, "y": 7 }, { "color": "GREEN", "x": 3, "y": 8 }, { "color": "GREEN", "x": 3, "y": 9 }, { "color": "WHITE", "x": 3, "y": 10 }], [{ "color": "WHITE", "x": 4, "y": 0 }, { "color": "WHITE", "x": 4, "y": 1 }, { "color": "WHITE", "x": 4, "y": 2 }, { "color": "WHITE", "x": 4, "y": 3 }, { "color": "WHITE", "x": 4, "y": 4 }, { "color": "GREEN", "x": 4, "y": 5 }, { "color": "WHITE", "x": 4, "y": 6 }, { "color": "WHITE", "x": 4, "y": 7 }, { "color": "WHITE", "x": 4, "y": 8 }, { "color": "GREEN", "x": 4, "y": 9 }, { "color": "WHITE", "x": 4, "y": 10 }], [{ "color": "GREEN", "x": 5, "y": 0 }, { "color": "GREEN", "x": 5, "y": 1 }, { "color": "GREEN", "x": 5, "y": 2 }, { "color": "GREEN", "x": 5, "y": 3 }, { "color": "WHITE", "x": 5, "y": 4 }, { "color": "GREEN", "x": 5, "y": 5 }, { "color": "GREEN", "x": 5, "y": 6 }, { "color": "GREEN", "x": 5, "y": 7 }, { "color": "WHITE", "x": 5, "y": 8 }, { "color": "GREEN", "x": 5, "y": 9 }, { "color": "WHITE", "x": 5, "y": 10 }], [{ "color": "WHITE", "x": 6, "y": 0 }, { "color": "WHITE", "x": 6, "y": 1 }, { "color": "WHITE", "x": 6, "y": 2 }, { "color": "WHITE", "x": 6, "y": 3 }, { "color": "WHITE", "x": 6, "y": 4 }, { "color": "GREEN", "x": 6, "y": 5 }, { "color": "WHITE", "x": 6, "y": 6 }, { "color": "WHITE", "x": 6, "y": 7 }, { "color": "WHITE", "x": 6, "y": 8 }, { "color": "GREEN", "x": 6, "y": 9 }, { "color": "WHITE", "x": 6, "y": 10 }], [{ "color": "WHITE", "x": 7, "y": 0 }, { "color": "GREEN", "x": 7, "y": 1 }, { "color": "GREEN", "x": 7, "y": 2 }, { "color": "GREEN", "x": 7, "y": 3 }, { "color": "GREEN", "x": 7, "y": 4 }, { "color": "GREEN", "x": 7, "y": 5 }, { "color": "WHITE", "x": 7, "y": 6 }, { "color": "GREEN", "x": 7, "y": 7 }, { "color": "GREEN", "x": 7, "y": 8 }, { "color": "GREEN", "x": 7, "y": 9 }, { "color": "WHITE", "x": 7, "y": 10 }], [{ "color": "WHITE", "x": 8, "y": 0 }, { "color": "WHITE", "x": 8, "y": 1 }, { "color": "WHITE", "x": 8, "y": 2 }, { "color": "GREEN", "x": 8, "y": 3 }, { "color": "WHITE", "x": 8, "y": 4 }, { "color": "WHITE", "x": 8, "y": 5 }, { "color": "WHITE", "x": 8, "y": 6 }, { "color": "WHITE", "x": 8, "y": 7 }, { "color": "WHITE", "x": 8, "y": 8 }, { "color": "GREEN", "x": 8, "y": 9 }, { "color": "WHITE", "x": 8, "y": 10 }], [{ "color": "GREEN", "x": 9, "y": 0 }, { "color": "GREEN", "x": 9, "y": 1 }, { "color": "WHITE", "x": 9, "y": 2 }, { "color": "GREEN", "x": 9, "y": 3 }, { "color": "GREEN", "x": 9, "y": 4 }, { "color": "GREEN", "x": 9, "y": 5 }, { "color": "GREEN", "x": 9, "y": 6 }, { "color": "GREEN", "x": 9, "y": 7 }, { "color": "GREEN", "x": 9, "y": 8 }, { "color": "GREEN", "x": 9, "y": 9 }, { "color": "WHITE", "x": 9, "y": 10 }], [{ "color": "WHITE", "x": 10, "y": 0 }, { "color": "WHITE", "x": 10, "y": 1 }, { "color": "WHITE", "x": 10, "y": 2 }, { "color": "WHITE", "x": 10, "y": 3 }, { "color": "WHITE", "x": 10, "y": 4 }, { "color": "WHITE", "x": 10, "y": 5 }, { "color": "WHITE", "x": 10, "y": 6 }, { "color": "WHITE", "x": 10, "y": 7 }, { "color": "WHITE", "x": 10, "y": 8 }, { "color": "WHITE", "x": 10, "y": 9 }, { "color": "WHITE", "x": 10, "y": 10 }]], "start": { "color": "WHITE", "x": 0, "y": 0 }, "end": { "color": "WHITE", "x": 10, "y": 10 } };

function Maze() {
   // const [maze, setMaze] = React.useState({})

    function getBlocks(row) {
        return row.map((col, colDex) => {
            return (
                <Block
                    key={`${colDex}`}
                    aisle={col.color === 'WHITE'}
                />
            )
        })
    }

    function getRows() {
        const blocks = mockMaze.blocks;
        return blocks.map((row, rowDex) => {
            return <div className="row" key={`${rowDex}`}> {getBlocks(row)}</div>;
        })
    }
    return (
        <div>
            <p>This is my maze</p>
            <div className="maze">{getRows()}</div>
        </div>
    );
}

export default Maze;