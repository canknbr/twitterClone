import { View, Text, Image } from 'react-native';
import React from 'react';
interface IProfileProps {
  image: string;
  size?: number;
}
const ProfilePicture = ({ image, size }: IProfileProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: size, height: size, borderRadius: size }}
      resizeMode="cover"
    />
  );
};

export default ProfilePicture;
