import { View, FlatList } from 'react-native';
import React from 'react';
import Tweets from '../../components/Tweets';
import tweets from '../../assets/data/tweets';
const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweets tweet={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
