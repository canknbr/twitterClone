import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: 'lightgrey',
    borderTopWidth: 0.5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  tweetContainer: {
    flex: 1,
  },
  tweetHeaderContainer: {
    flexDirection: 'row',
  },
  tweetContentContainer: {
    marginVertical: 5,
  },
  tweetFooterContainer: {
    flexDirection: 'row',
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  username: {
    marginRight: 5,
    color: 'grey',
  },
  createdAt: {
    color: 'grey',
  },
  content: {
    lineHeight: 18,
    color: 'black',
  },
  tweetImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 15,
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  number: {
    color: 'grey',
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
});

export default styles;
