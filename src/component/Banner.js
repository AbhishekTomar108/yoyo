import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import cardImage from '../image/newsletter-cover.png';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={cardImage}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 200,
    backgroundColor: '#eee',
    // borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});

export default Banner;
