import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    videos: [],
  };
  onHandleForm = async (term) => {
    console.log('term in onHandlleForm:', term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: 'AIzaSyAW2pOUr67-LwAZ9obfWKwHHjQpM2Y4EPA',
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    console.log(this.state.videos);
    return (
      <div className="ui container">
        <SearchBar term={this.onHandleForm} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
