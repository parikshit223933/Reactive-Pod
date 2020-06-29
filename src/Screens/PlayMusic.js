import React from 'react';

class Music extends React.Component
{
    componentDidMount()
    {
        this.props.currentlyOnPlayMusicScreen();
        this.props.playPauseButtonClicked();
    }
    componentWillUnmount()
    {
        this.props.currentlyOnPlayMusicScreen()
    }
    
    render()
    {
        const {songIndex, Songs}=this.props;
        return (
            <div className="screen-music">
                <h2>{Songs[songIndex].name}</h2>
                <div className="song-image">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzrIyTb8emnPtXD2EYZ1nkSdIkYZ2zxUzUhw&usqp=CAU'} alt="song item"></img>
                </div>
                <div style={{marginTop:20}}>
                    <audio controls="seeking" id="audio" src={Songs[songIndex].url}></audio>
                </div>
            </div>
        );
    }
};

export default Music;