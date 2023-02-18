import {StyleSheet} from 'react-native';

type styleProps = {
  size: number;
};

export const styles = ({size}: styleProps) =>
  StyleSheet.create({
    image: {width: size, height: size, resizeMode: 'cover'},
  });
