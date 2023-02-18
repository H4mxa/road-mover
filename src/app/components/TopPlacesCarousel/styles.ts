import {StyleSheet} from 'react-native';
import Card from './core/constants';
import {colors, sizes, spacing} from '../../../modules/constants/theme';

type propTypes = {
  index?: number;
  list?: any;
};

const {CARD_WIDTH, CARD_HEIGHT} = Card;

export const styles = ({index, list}: propTypes) =>
  StyleSheet.create({
    cardContainer: {
      marginLeft: spacing.l,
      marginRight: index === list?.length - 1 ? spacing.l : 0,
    },
    card: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      marginVertical: 10,
    },
    image: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      resizeMode: 'cover',
    },
    imageBox: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      borderRadius: sizes.radius,
      overflow: 'hidden',
    },
    titleBox: {
      position: 'absolute',
      top: CARD_HEIGHT - 80,
      left: 16,
    },
    title: {
      fontSize: sizes.h3,
      fontWeight: 'bold',
      color: colors.white,
    },
    location: {
      fontSize: sizes.h3,
      color: colors.white,
    },
    favorite: {
      position: 'absolute',
      top: spacing.m,
      right: spacing.m,
      zIndex: 1,
    },
  });
