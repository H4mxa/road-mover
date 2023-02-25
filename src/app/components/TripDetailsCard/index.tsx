import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';

const TripDetailsCard = ({trip}: any) => {
  return (
    <View style={styles.card}>
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        duration={400}
        easing="ease-in-out">
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.location}>{trip.location}</Text>
      </Animatable.View>
    </View>
  );
};

export default TripDetailsCard;
