import React from 'react';
import * as firebase from 'firebase';
class AllSongs extends React.Component
{
    constructor()
    {
        super();
        this.new_data_array=[]
        this.state={
            all_songs_list:[]
        }
    }
    componentDidMount()
    {
        firebase.storage().ref().child('music').listAll()
        .then((data)=>
        {
            data.items.forEach(async (ref)=>
            {
                await ref.getDownloadURL()
                .then((url)=>
                {
                    this.new_data_array.push({name:ref.name, url:url})
                    this.setState({
                        all_songs_list:this.new_data_array
                    });
                })
                .catch((error)=>
                {
                    console.log(error);
                })
            })
        })
        
        .catch((error)=>
        {
            if(error)
            {
                console.log(error);
            }
        })
    }
    render()
    {
        return (
            <div className="all-songs">
                <h1 className="all-songs-heading">
                    All Songs
                </h1>
                <div className="all-songs-list">
                    {this.state.all_songs_list.map((item)=>
                    {
                        console.log(item);
                        return (
                        <div>
                            {item.name}
                        </div>
                        )
                    })}
                </div>
            </div>
        );

    }
}

export default AllSongs;