import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            options: ['Games', 'Music', 'Settings', 'Cover Flow'],
            change_in_angle: 0,
            selected: 0
        }
    }
    componentDidMount()
    {
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
            let dist = event.detail.distanceFromLast;
            this.state.change_in_angle += dist;
            if (this.state.change_in_angle > 60)
            {
                this.state.selected++;
                this.state.selected = this.state.selected % 4;
                this.setState({
                    selected: this.state.selected
                });

                this.state.change_in_angle = 0;
            }
            else if (this.state.change_in_angle < -60)
            {
                this.state.selected--;
                if (this.state.selected === -1)
                    this.state.selected = 3;

                this.state.selected = this.state.selected % 4;
                this.setState({
                    selected: this.state.selected
                });
                this.state.change_in_angle = 0;
            }
        });
        zt.bind(document.getElementsByClassName('center-circle')[0], 'tap', (event) =>
        {
            event.stopPropagation();
        });

    }


    render()
    {
        return (
            <div className="App">
                <Screen
                    selectedOption={this.state.selected}
                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                />
            </div>
        );
    }

}

export default App;
