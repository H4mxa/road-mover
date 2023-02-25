import {StyleSheet} from 'react-native';
import {sizes} from '../../../../../modules/constants/theme';

export const styles = StyleSheet.create({
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  slide: {
    width: sizes.width,
    height: sizes.height,
  },
  indicators: {
    position: 'absolute',
    width: sizes.width,
    bottom: 60,
    alignItems: 'center',
  },
});
