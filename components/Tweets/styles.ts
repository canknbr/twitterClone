import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: '#f1f3f5',
    borderTopWidth: 0.5,
    borderBottomColor: '#f1f3f5',
    borderBottomWidth: 0.5,
    padding: 15,
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
    color: '#343a40',
  },
  username: {
    marginRight: 5,
    color: '#adb5bd',
  },
  createdAt: {
    color: '#adb5bd',
  },
  content: {
    lineHeight: 18,
    fontSize: 16,
    color: '#495057',
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
    color: '#adb5bd',
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
});

export default styles;
