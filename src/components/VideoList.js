import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, videoSelect}) => {
    //maping over array of objects
    const renderedList = videos.map((video) => {
        //Add prop video to a component as a video that we iterating over
        //passing to VideoItem
        return (
        <VideoItem 
        key={video.id.videoId}
        videoSelect={videoSelect} 
        video={video} />
        )
    });

    return (
        //props.videos - array of different records
        <div className="video-list">
            {renderedList}
        </div>
    )
}

export default VideoList
