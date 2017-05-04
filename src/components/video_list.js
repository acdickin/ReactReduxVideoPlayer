import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = (props) =>{
	// const videos=props.videos;
	//Creates list of videos and passes down onVideoSelect for callback
	const videoItems= props.videos.map((video)=>{
		return(
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key ={video.etag} 
				video={video}/>
		)
	});
	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;