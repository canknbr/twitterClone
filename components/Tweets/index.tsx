import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons, EvilIcons, Feather, Entypo } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
interface ITweetProps {
  tweet: {
    id: string;
    user: {
      name: string;
      username: string;
      image?: string;
      id: string;
    };
    createdAt: string;
    content: string;
    image?: string;
    numberOfComments: number;
    numberOfRetweets: number;
    numberOfLikes: number;
  };
}
const Tweets = ({ tweet }: ITweetProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: tweet.user.image }} />
      <View style={styles.tweetContainer}>
        <View style={styles.tweetHeaderContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}> @{tweet.user.username}</Text>
          <Text style={styles.createdAt}>
            · {dayjs(tweet.createdAt).fromNow()}
          </Text>
        </View>
        <View style={styles.tweetContentContainer}>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image style={styles.tweetImage} source={{ uri: tweet.image }} />
          )}
        </View>
        <View style={styles.tweetFooterContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubble-outline" size={20} color="grey" />
            <Text style={styles.number}>{tweet.numberOfComments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <EvilIcons name="retweet" size={26} color="grey" />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Feather name="heart" size={20} color="grey" />
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="share" size={20} color="grey" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tweets;
