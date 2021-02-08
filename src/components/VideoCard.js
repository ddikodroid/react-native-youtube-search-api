import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {FONT, HEIGHT, WIDTH} from '../styles/Dimension';
const VideoCard = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={styles.imageWrapper}
      />
      <View style={styles.infoWrapper}>
        <Text style={FONT.h3}>{props.title}</Text>
        <Text style={FONT.body4}>{props.channel}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: WIDTH * 0.02,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  infoWrapper: {
    paddingTop: HEIGHT * 0.01,
    marginHorizontal: WIDTH * 0.075,
  },
  imageWrapper: {
    width: '100%',
    height: HEIGHT * 0.25,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
