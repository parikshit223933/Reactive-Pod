import React from 'react';
import Menu from './Screens/Menu'
import Game from './Screens/Game'
import Music from './Screens/Music'
import Coverflow from './Screens/Coverflow'
import Setting from './Screens/Setting'


class Screen extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        console.log(this.props.selectedOption);
        return (
            <div className="screen-container">
                <Menu/> 
            </div>
        );
    }

}

export default Screen;