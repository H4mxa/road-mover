import {StyleSheet} from 'react-native';
import {colors, sizes, spacing} from '../../../../../modules/constants/theme';

export const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: sizes.title,
    color: colors.white,
  },
});
