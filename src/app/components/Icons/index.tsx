import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import icons, {iconTypes} from '../../../modules/constants/icons';
import {styles} from './styles';

type propsTypes = {
  onPress?: () => void;
  icon: iconTypes;
  size?: number;
  style?: any;
};

const Icon = ({onPress, icon, style, size = 32}: propsTypes) => {
  const image = (
    <Image source={icons[icon] as any} style={[style, styles({size}).image]} />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
  }

  return image;
};

export default Icon;
