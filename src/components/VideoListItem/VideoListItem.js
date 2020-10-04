import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './video-list-item.css';
import YouTube from '@u-wave/react-youtube';

class VideoListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videoId: 'BD8rt6MaB2s'
        }
    };

    handelClick = (key, e) => {
        e.preventDefault();
        this.setState(state => ({
            videoId: key
          }));
        document.documentElement.scrollTop = 0;
    }
    render() {
        const videoItems = this.props.videoInfo.map(item => 
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="cardVideoListItemContainer" key={item.id}>
                <Card className="cardVideoListItem" key={item.id} onClick={(e) => this.handelClick(item.id, e)}>
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
            <YouTube height="500px" width="870px" video={this.state.videoId}/>
            <Grid container>
            {videoItems}
            </Grid>
            </div>
        )
    }
};

export default VideoListItem;
