import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../components/Icons';
import {useTripDetails} from './hooks/useTripDetails';
import {styles} from './styles';

type propTypes = {
  navigation?: any;
  route: any;
};

const TripDetailsScreen = ({navigation, route}: propTypes) => {
  const insets = useSafeAreaInsets();
  const {handleMethod} = useTripDetails();
  const {trip} = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.backButton, {marginTop: insets.top}]}>
        <Icon
          icon="ArrowLeft"
          style={styles.backIcon}
          onPress={() => handleMethod('goBack')?.(navigation)}
        />
      </View>
      <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
        <Image
          style={[StyleSheet.absoluteFillObject, styles.image]}
          source={trip.image}
        />
      </View>
    </View>
  );
};

export default TripDetailsScreen;
