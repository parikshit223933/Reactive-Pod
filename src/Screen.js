import React from 'react';
import Menu from './Screens/Menu'
import Game from './Screens/Games'
import Music from './Screens/Music'
import Setting from './Screens/Setting'
import Coverflow from './Screens/Coverflow'

import AllSongs from './Screens/AllSongs'
import Artists from './Screens/Artists';
import Albums from './Screens/Albums';

class Screen extends React.Component
{
    render()
    {
        console.log(this.props.optionsInMenu);
        return (
            <div className="screen-container">
                <Menu
                    selectedOption={this.props.selectedOption}
                    optionsInMenu={this.props.optionsInMenu}
                />
                {this.props.showPage === 0&&this.props.optionsInMenu.length===4 ? <Game /> : ''}
                {/* {this.props.showPage === 1&&this.props.optionsInMenu.length===4 ? <Music /> : ''} */}
                {this.props.showPage === 2&&this.props.optionsInMenu.length===4 ? <Setting /> : ''}
                {this.props.showPage === 3&&this.props.optionsInMenu.length===4 ? <Coverflow /> : ''}

                {this.props.showPage === 0&&this.props.optionsInMenu.length===3 ? <AllSongs /> : ''}
                {this.props.showPage === 1&&this.props.optionsInMenu.length===3 ? <Artists /> : ''}
                {this.props.showPage === 2&&this.props.optionsInMenu.length===3 ? <Albums /> : ''}
            </div>
        );
    }

}

export default Screen;