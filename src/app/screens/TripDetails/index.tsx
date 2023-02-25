import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../components/Icons';
import {useTripDetails} from './hooks/useTripDetails';
import {styles} from './styles';
import {SharedElement} from 'react-navigation-shared-element';
import TripDetailsCard from '../../components/TripDetailsCard';
import * as Animatable from 'react-native-animatable';

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
      <Animatable.View
        style={[styles.backButton, {marginTop: insets.top}]}
        animation="fadeIn"
        delay={500}
        duration={500}
        easing="ease-in-out">
        <Icon
          icon="ArrowLeft"
          style={styles.backIcon}
          onPress={() => handleMethod('goBack')?.(navigation)}
        />
      </Animatable.View>
      <SharedElement
        id={`trip.${trip.id}.image`}
        style={StyleSheet.absoluteFillObject}>
        <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
          <Image
            style={[StyleSheet.absoluteFillObject, styles.image]}
            source={trip.image}
          />
        </View>
      </SharedElement>
      <TripDetailsCard trip={trip} />
    </View>
  );
};

TripDetailsScreen.sharedElements = (route: any) => {
  const {trip} = route.params;
  return [{id: `trip.${trip.id}.image`}];
};

export default TripDetailsScreen;
