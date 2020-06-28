import React from 'react';
import * as firebase from 'firebase';

class Music extends React.Component
{
    constructor()
    {
        super();
        this.state={
            audioURL:''
        }
    }
    UNSAFE_componentWillMount()
    {
        firebase.storage().ref().child('music/Khairiyat-sad-(probhai.wapkiz.com).mp3').getDownloadURL()
            .then((ans) =>
            {
                console.log()
                this.setState({
                    audioURL:ans
                })
            })
            .catch((error) =>
            {
                console.log('There was an error in getting the file from the storage!', error);
            })
    }
    render()
    {
        return (
            <div className="screen-music">
                <h1>Music</h1>
                <audio controls src={this.state.audioURL}></audio>
            </div>
        );
    }
};

export default Music;