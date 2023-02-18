import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../modules/constants/theme';

export const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / 3 / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
