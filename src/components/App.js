import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

export default class App extends React.Component {
    //Passing videos and callback to VideoList
    state = {videos: [], selectedVideo: null};

    //Default search when app component is first redered to the screen
    componentDidMount() {
        this.termSubmit('borknagar')
    }

    //Callback that will be called when someone submits form
    termSubmit = async (term) => {
        //Import Youtube API
        //youtube function-preconfigured axios pass to response object (accesing search endpoint & passing param of que to tell which tearm we wont to use)
        const response = await youtube.get('/search', {
            params: {
                //search string - term argument
                q: term
            }
        });
        //Take a list of videos and set them as state to component which allows to rerender component and new videos depands on request
        this.setState({
            videos: response.data.items,
            //update selected first video in results
            selectedVideo: response.data.items[0]
        })
    };
    //callback function that will be called from object that we fetch from API
    videoSelect = (video) => {
        //Updating state-selected video
        this.setState({selectedVideo:video})
    }

    render() {
        return ( 
            <div className="container">
                {/* Add callbackas as a prop */}
                <SearchBar 
                formSubmit={this.termSubmit}/> 
                <VideoDetail 
                video={this.state.selectedVideo} />
                {/* Prop reference to array*/}
                <VideoList 
                videoSelect={this.videoSelect} 
                videos={this.state.videos} />
            </div>
        )
    }
};