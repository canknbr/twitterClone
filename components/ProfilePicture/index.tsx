import { Image, View } from 'react-native';

interface IProfileProps {
  image: string;
  size?: number;
}
const ProfilePicture = ({ image, size }: IProfileProps) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: size, height: size, borderRadius: size }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProfilePicture;
