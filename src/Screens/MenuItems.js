import React from 'react';

class MenuItems extends React.Component
{
    render()
    {
        const { optionsInMenu } = this.props;
        return (
            <React.Fragment>

                {
                    optionsInMenu.map((item, index) =>
                    {
                        return (
                            <div className={this.props.selectedOption === index ? 'selected' : ''} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }

                {/* <div className={this.props.selectedOption === 0 ? 'selected' : ''}>
                    <p>Games</p>
                </div>
                <div className={this.props.selectedOption === 1 ? 'selected' : ''}>
                    <p>Music</p>
                </div>
                <div className={this.props.selectedOption === 2 ? 'selected' : ''}>
                    <p>Settings</p>
                </div>
                <div className={this.props.selectedOption === 3 ? 'selected' : ''}>
                    <p>Cover Flow</p>
                </div> */}
            </React.Fragment>
        )
    }
}
export default MenuItems;