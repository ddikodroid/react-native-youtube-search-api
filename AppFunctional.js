import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SearchBar, VideoCard} from './src/components';
import {FONT} from './src/styles/Dimension';
import axios from 'axios';
import Config from 'react-native-config';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const fetchVideoData = () => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${keyword}&type=video&key=${Config.YT_KEY}`,
      )
      // .then(res => res.json())
      .then((res) => {
        setVideoData(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitKeyword = () => {
    fetchVideoData();
  };
  return (
    <SafeAreaView style={styles.container} accessibilityLabel="root">
      <Text style={FONT.h2} accessibilityLabel="rootTitle">
        Youtube Search API
      </Text>
      <Text style={FONT.h3}>Functional Component with Hooks</Text>
      <SearchBar
        placeholder="Masukkan kata kunci"
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
        onPress={onSubmitKeyword}
        searchInputAccessibilityLabel={'searchInput'}
        searchButtonAccessibilityLabel={'searchButton'}
      />
      {loading ? <ActivityIndicator size="large" color="blue" /> : null}
      <FlatList
        data={videoData}
        renderItem={({item, index}) => {
          return (
            <VideoCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              accessibilityLabel="videoCard"
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
