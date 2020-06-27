import React from 'react';
import Menu from './Screens/Menu'
import Game from './Screens/Game'
import Music from './Screens/Music'
import Setting from './Screens/Setting'
import Coverflow from './Screens/Coverflow'


class Screen extends React.Component
{
    render()
    {
        return (
            <div className="screen-container">
                <Menu
                    selectedOption={this.props.selectedOption}
                />
                {this.props.showPage === 0 ? <Game /> : ''}
                {this.props.showPage === 1 ? <Music /> : ''}
                {this.props.showPage === 2 ? <Setting /> : ''}
                {this.props.showPage === 3 ? <Coverflow /> : ''}
            </div>
        );
    }

}

export default Screen;