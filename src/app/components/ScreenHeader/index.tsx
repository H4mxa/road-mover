import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type propsTypes = {
  mainTitle: string;
  secondTitle: string;
};

const ScreenHeader = ({mainTitle, secondTitle}: propsTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

export default ScreenHeader;
