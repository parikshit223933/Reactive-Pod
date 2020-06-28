import React from 'react';
import * as firebase from 'firebase';

class Music extends React.Component
{
    constructor()
    {
        super();
        this.state={
            songResources:[]
        }
    }

    componentDidMount()
    {
        firebase
            .firestore()
            .collection('song_images')
            .onSnapshot((snapshot)=>
            {
                const temp=snapshot.docs.map((doc)=>
                {
                    return doc.data();
                });
                this.setState({
                    songResources:temp
                });
            });
    }

    render()
    {
        console.log(this.state.songResources[this.props.songIndex]);
        const {songIndex, Songs}=this.props;
        return (
            <div className="screen-music">
                <h2>{Songs[songIndex].name}</h2>
                <div className="song-image">
                    <img src={this.state.songResources[songIndex]===undefined?'':this.state.songResources[songIndex].img_url} alt="song item"></img>
                </div>
            </div>
        );
    }
};

export default Music;