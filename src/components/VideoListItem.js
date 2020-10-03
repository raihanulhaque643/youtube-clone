import React from 'react';
import Card from '@material-ui/core/Card';
import '../components/video-list-item.css'

export const VideoListItem = () => {
    return (
        <div>
            <Card className="cardVideoListItem">
                <img src="https://i.ytimg.com/vi/Zr3PukaVXFo/sddefault.jpg" alt="" width="100%"/>
                <div className="details">
                <h5>Video title details</h5>
                <span>Channel name</span> <br/>
                <span>Other info</span>
                </div>
            </Card>
        </div>
    )
};

export default VideoListItem;
