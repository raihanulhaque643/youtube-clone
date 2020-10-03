import React, { Component } from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';
import axios from 'axios';

class VideoList extends Component {
    state = {
        videos: []
    }

    async componentDidMount() {
       await axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBDkXfYVkt0ibhjbP5fQNrqNIRV-6wQeEU&part=snippet,contentDetails&regionCode=bd&chart=mostPopular&maxResults=20')
      .then(res => {
        const videos = res.data.items;
        this.setState({ videos });
      })

      setTimeout(() => {
          console.log(this.state.videos)
      }, 2000);
    }

    render() {
        return (
            <div>
                <VideoListItem videoInfo={this.state.videos} />
            </div>
        )
    }
};

export default VideoList;
