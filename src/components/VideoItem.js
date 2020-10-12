import React from 'react'
import './VideoItem.css'

const VideoItem = ({video, videoSelect}) => {


    return (
        //Calling on video select with argument(invoking callback back to App)
        <div 
        onClick={() => videoSelect(video)} 
        className="video-box">
            {/*Looking for a video propertis*/}
                <img 
                className="z-depth-2" 
                src={video.snippet.thumbnails.medium.url} 
                alt="thumbnail"/>
                <h6>{video.snippet.title.replaceAll('&quot;', "'")}</h6>
        </div>
    )
}

export default VideoItem
