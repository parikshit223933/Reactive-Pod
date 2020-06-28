import React from 'react';
import './game_style.css'

class Game extends React.Component
{
    render()
    {
        return (
            <div className="screen-game">
                <div id="rod-one">
                    <p style={{margin:0, fontSize:12, color:'white'}}>Rod 1</p>
                </div>
                <div id="ball">

                </div>
                <div id="rod-two">
                    <p style={{margin:0, fontSize:12, color:'white'}}>Rod 2</p>
                </div>
            </div>
        );
    }
};

export default Game;