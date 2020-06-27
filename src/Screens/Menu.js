import React from 'react';

class Menu extends React.Component
{
    render()
    {
        const { selectedOption } = this.props;
        return (
            <div className="screen-menu">
                <div className="app-logo">
                    <h3><i>REACTIVE POD</i></h3>
                </div>
                <div className={selectedOption === 0 ? 'selected' : ''}>
                    <p>Games</p>
                </div>
                <div className={selectedOption === 1 ? 'selected' : ''}>
                    <p>Music</p>
                </div>
                <div className={selectedOption === 2 ? 'selected' : ''}>
                    <p>Settings</p>
                </div>
                <div className={selectedOption === 3 ? 'selected' : ''}>
                    <p>Cover Flow</p>
                </div>
            </div>
        )
    }
}

export default Menu;