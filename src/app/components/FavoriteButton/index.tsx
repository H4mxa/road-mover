import React from 'react';
import {View} from 'react-native';
import {shadow} from '../../../modules/constants/theme';
import Icon from '../Icons';
import {styles} from './styles';

type propTypes = {
  active?: boolean;
  style?: object;
};

const FavoriteButton = ({active, style}: propTypes) => {
  return (
    <View style={[styles.container, shadow.light, style]}>
      <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
    </View>
  );
};

export default FavoriteButton;
