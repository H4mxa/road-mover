import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../../modules/constants/theme';

export const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    opacity: 0.3,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: sizes.radius,
  },
  indicator: {
    position: 'absolute',
    backgroundColor: colors.primary,
    borderRadius: sizes.radius,
    top: 4,
  },
});
