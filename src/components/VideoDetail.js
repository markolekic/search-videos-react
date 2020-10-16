import React from 'react'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
           <div className="video-container z-depth-2">
                <iframe 
                title="player" 
                src={videoSrc} 
                frameBorder="0" 
                allowFullScreen>
                </iframe>
           </div>
            <h5>{video.snippet.title.replaceAll('&quot;', "'")}</h5>
            <p>{video.snippet.description}</p>
            <hr/>
        </div>
    )
}

export default VideoDetail;
