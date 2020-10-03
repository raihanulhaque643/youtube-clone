import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './video-list-item.css';

const VideoListItem = (props) => {
    console.log(props.videoInfo)
    const videoItems = props.videoInfo.map(item => 
        <Grid item xs={12} sm={12} md={4} lg={3} xl={2} className="cardVideoListItemContainer">
            <Card className="cardVideoListItem" key={item.id}>
                <img src={item.snippet.thumbnails.standard.url} alt="" width="100%"/>
                <div className="details">
                <h5>{item.snippet.title}</h5>
                <span>{item.snippet.channelTitle}</span> <br/>
                <span style={{color:'grey',fontSize:'12px'}}>Published at {item.snippet.publishedAt}</span>
                </div>
            </Card>
        </Grid>
    )
    return (
        <div>
        <Grid container>
        {videoItems}
        </Grid>
        </div>
    )
};

export default VideoListItem;
