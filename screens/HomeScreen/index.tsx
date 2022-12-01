import { View } from 'react-native';
import React from 'react';

import Feeds from '../../components/Feeds';
const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <Feeds />
      
    </View>
  );
};

export default HomeScreen;
