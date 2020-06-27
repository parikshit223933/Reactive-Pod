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
        this.change_in_angle=0;
    }
    componentDidMount()
    {
        var zt=new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event)=>
        {
            let dist=event.detail.distanceFromLast;
            this.change_in_angle+=dist;
            if(this.change_in_angle>15)
            {
                console.log('clockwise');
                this.change_in_angle=0;
            }
            else if(this.change_in_angle<-15)
            {
                console.log('anti-clockwise');
                this.change_in_angle=0;
            }
        });
        zt.bind(document.getElementsByClassName('center-circle')[0], 'tap', (event)=>
        {
            event.stopPropagation();
        });
        
    }


    render()
    {
        return (
            <div className="App">
                <Screen />
                <Buttons
                check={this.checker}
                centerButton={this.centerButton} 
                />
            </div>
        );
    }

}

export default App;
