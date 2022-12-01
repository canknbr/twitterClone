import { View, FlatList } from 'react-native';
import React from 'react';
import Tweets from '../Tweets';
import tweets from '../../assets/data/tweets';
import NewTweetButton from '../NewTweetButton';
const Feeds = () => {
  return (
    <View>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweets tweet={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          right: 10,
        }}
      >
        <NewTweetButton />
      </View>
    </View>
  );
};

export default Feeds;
