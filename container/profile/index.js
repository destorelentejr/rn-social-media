/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import axios  from 'axios';

import styles from './style';
import { Avatar, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [imageGallery, setImageGallery] = useState([])
  const [isLoadingIndicatorShown, setIsLoadingIndicatorShown] = useState(false)

  const ListFooter = () => {
    if (!isLoadingIndicatorShown) return null;
    return (
      <View style={styles.container}>
        <ActivityIndicator color='#FFFFFF' />
      </View>
    )
  }

  const ListEmpty = () => {

    return (
      <View style={styles.emptyContainer}>
        <ActivityIndicator size='large' color='#FFFFFF' />
      </View>
    )
  }
  
  const ImageItem = ({ item }) => {
  
    return (
      <Image
        style={styles.image}
        source={{ uri: item.picture.large}}
      />
    )
  }
  
  const toggleLoadingIndicator = () => {
    console.log('toggleLoadingIndicator()');
    
    setIsLoadingIndicatorShown(prevState => !prevState);
  }

  const getImageGallery = () => {
    axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=20&seed=abc`)
    .then(({ data }) => {
      console.log('data: ', data);

      setImageGallery(prevState => [...prevState, ...data.results]);
      setIsLoadingIndicatorShown(false);

    }).catch((error) => {
      console.log('error: ', error.message);
    });
  }

  useEffect(() => {
    getImageGallery();

  }, []);

  useEffect(() => {
    if (isLoadingIndicatorShown) {
      setPageNumber(prevState => prevState + 1)
      getImageGallery();
    }

  }, [isLoadingIndicatorShown]);

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.profileContainer}>
          <Avatar rounded size='large' source={{ uri: 'https://img.discogs.com/zmbKJDq1gVW0JRJ8SOtwyGoIE6s=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-135246-1350055490-9841.jpeg.jpg' }} />
          <Text h4 style={styles.username}>mariefold</Text>
        </View>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.contentContainerStyle}
          data={imageGallery}
          renderItem={ImageItem}
          extraData={imageGallery}
          horizontal={false}
          numColumns={3}
          onEndReached={toggleLoadingIndicator}
          onEndReachedThreshold={0.5}
          ListFooterComponent={ListFooter}
          ListEmptyComponent={ListEmpty}
        />
      </ScrollView>
    </SafeAreaView>
  );
};



export default Profile;
