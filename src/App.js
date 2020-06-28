import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import 'lodash';
import $ from 'jquery';

class App extends React.Component
{
    constructor()
    {
        super();
        this.temp_change_in_angle=0;
        this.temp_selected=0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'Cover Flow'],
            change_in_angle: 0,
            selected: 0,
            showPage:-1,
            general_menu:['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu:['All Songs', 'Artists', 'Albums']
        }
    }

    componentDidMount()
    {
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
            let dist = event.detail.distanceFromLast;
            this.temp_change_in_angle += dist;
            if (this.temp_change_in_angle > 60)
            {
                this.temp_selected++;
                this.temp_selected = this.temp_selected % this.state.options.length;
                this.setState({
                    selected: this.temp_selected
                });

                this.temp_change_in_angle = 0;
            }
            else if (this.temp_change_in_angle < -60)
            {
                this.temp_selected--;
                if (this.temp_selected === -1)
                    this.temp_selected = this.state.options.length-1;

                this.temp_selected = this.temp_selected % this.state.options.length;
                this.setState({
                    selected: this.temp_selected
                });
                this.temp_change_in_angle = 0;
            }
        });
    }

    menuButtonClicked =()=>
    {
        if(this.state.options===this.state.songs_sub_menu)
        {
            this.setState({
                options:this.state.general_menu
            });
            return;
        }

        let screenMenuClassList=document.getElementsByClassName('screen-menu')[0].classList;
        if(screenMenuClassList.contains('width-50'))
        {
            $('.screen-menu').removeClass('width-50');//hide menu
        }
        else
        {
            $('.screen-menu').addClass('width-50');//show menu
        }
    }

    selectButtonClicked=()=>
    {
        if(this.state.selected===1)
        {
            this.setState(
                {
                    options:this.state.songs_sub_menu
                }
            );
            return;
        }
        this.menuButtonClicked();
        this.setState({
            showPage:this.state.selected
        });
    }

    render()
    {
        return (
            <div className="App">
                <Screen
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                    optionsInMenu={this.state.options}
                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                />
            </div>
        );
    }

}

export default App;
