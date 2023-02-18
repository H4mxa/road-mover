import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';

type propTypes = {
  title: string;
  onPress: () => void;
  buttonTitle?: string;
};

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}: propTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={buttonTitle} onPress={onPress} />
    </View>
  );
};

export default SectionHeader;
