import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../../components/ProfilePicture';
const mainColor = Colors.light.tint;
const NewTweetScreen = () => {
  const navigation = useNavigation();
  const [tweet, setTweet] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const onPostTweet = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color={mainColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: tweet || imageUrl ? mainColor : 'lightgrey' },
          ]}
          onPress={onPostTweet}
        >
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image="https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          size={50}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={tweet}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            onChangeText={setTweet}
            multiline
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
          />
          <TextInput
            style={styles.imageInput}
            placeholder="Optional: Enter image URL"
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </View>
      </View>
    </View>
  );
};

export default NewTweetScreen;
