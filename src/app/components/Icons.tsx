import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import icons from '../../modules/constants/icons';

type propsTypes = {
  onPress?: () => void;
  icon: string | any;
  size: number;
  style: any;
};

const Icon = ({onPress, icon, style, size = 32}: propsTypes) => {
  const image = (
    <Image
      source={icons[icon] as any}
      style={[style, {width: size, height: size, resizeMode: 'cover'}]}
    />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
  }

  return image;
};

export default Icon;
