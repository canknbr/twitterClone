import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
const mainColor = Colors.light.tint;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: mainColor,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },

  inputContainer: {
    marginLeft: 10,
    flex: 1,
  },

  tweetInput: {
    maxHeight: 300,
    height: 100,
    textAlignVertical: 'top',
  },
  imageInput: {
    height: 150,
    marginVertical: 10,
    resizeMode: 'cover',
    borderRadius: 15,
  },
});

export default styles;
