import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {SearchBar, VideoCard} from './src/components';
import {FONT} from './src/styles/Dimension';
import Config from 'react-native-config';

export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      loading: false,
      videoData: [],
    };
    this.handleVideoData = this.handleVideoData.bind(this);
  }

  handleVideoData() {
    this.setState({loading: true});
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${this.state.keyword}&type=video&key=${Config.YT_KEY}`,
      )
      .then((res) => {
        this.setState({videoData: res.data.items});
        this.setState({loading: false});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={FONT.h2}> YouTube Search API </Text>
        <Text style={FONT.h3}>Class Component</Text>
        <SearchBar
          placeholder="Masukkan kata kunci"
          value={this.keyword}
          onChangeText={(text) => this.setState({keyword: text})}
          onPress={this.handleVideoData}
        />
        {this.loading ? <ActivityIndicator size="large" color="red" /> : null}
        <FlatList
          data={this.state.videoData}
          renderItem={({item}) => {
            return (
              <VideoCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </SafeAreaView>
    );
  }
}

export default AppClass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
