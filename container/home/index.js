/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { Card, Text } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

import axios  from 'axios';
import styles from './style';


const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [newsFeedData, setNewsFeedData] = useState([]);
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
  
  const NewsFeedItem = ({ item }) => {
  
    return (
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Avatar 
            rounded
            source={{
              uri : item.picture.thumbnail
            }}
          />
          <Text h5 style={styles.username}>{item.login.username}</Text>
        </View>
        <Card.Image source={{ uri : item.picture.large }} style={styles.image} />
      </Card>
    )
  }

  const toggleLoadingIndicator = () => {
    console.log('toggleLoadingIndicator()');
    
    setIsLoadingIndicatorShown(true);
  }

  const getNewsFeedData = () => {
    axios.get(
      `https://randomuser.me/api/?page=${pageNumber}&results=20&seed=abc`
    ).then(({ data }) => {
      console.log('data: ', data);

      setPageNumber(pageNumber + 1)
      setNewsFeedData(prevState => [...prevState, ...data.results]);
      setIsLoadingIndicatorShown(false);

    }).catch((error) => {
      console.log('error: ', error.message);
    });
  }

  useEffect(() => {

    getNewsFeedData();
  })

  useEffect(() => {
    if (isLoadingIndicatorShown) {
      getNewsFeedData();
    }

  }, [isLoadingIndicatorShown]);

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={'light-content'} />
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainerStyle}
        data={newsFeedData}
        renderItem={NewsFeedItem}
        extraData={newsFeedData}
        horizontal={false}
        numColumns={1}
        onEndReached={toggleLoadingIndicator}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty}
      />
    </SafeAreaView>
  );
};

export default Home;
