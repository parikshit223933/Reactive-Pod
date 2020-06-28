import React from 'react';
import * as firebase from 'firebase';
class AllSongs extends React.Component
{
    constructor()
    {
        super();
        this.new_data_array = []
        this.state = {
            all_songs_list: [],
            loading: true
        }
    }
    componentDidMount()
    {
        firebase.storage().ref().child('music').listAll()
            .then((data) =>
            {
                data.items.forEach(async (ref) =>
                {
                    await ref.getDownloadURL()
                        .then((url) =>
                        {
                            this.new_data_array.push({ name: ref.name, url: url })
                            this.setState({
                                all_songs_list: this.new_data_array,
                                loading: false
                            });
                        })
                        .catch((error) =>
                        {
                            console.log(error);
                        })
                })
            })

            .catch((error) =>
            {
                if (error)
                {
                    console.log(error);
                }
            })
    }
    render()
    {
        return (this.state.loading ? <h1>Loading</h1> :
            <div className="all-songs">
                <h1 className="all-songs-heading">
                    All Songs
                </h1>
                <div className="all-songs-list">
                    {this.state.all_songs_list.map((item, index) =>
                    {
                        
                        return (
                            <div className={this.props.currentMusicSelection==index?'selected-song':''} key={index}>
                                {item.name}
                            </div>
                        )
                    })}
                    <div className="instruction-all-songs">
                        use <i className="fas fa-backward"></i> and <i className="fas fa-forward"></i> buttons to navigate
                    </div>
                </div>

            </div>
        );

    }
}

export default AllSongs;