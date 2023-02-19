import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {shadow} from '../../../modules/constants/theme';
import FavoriteButton from '../FavoriteButton';
import {dataList} from '../TopPlacesCarousel/core/types';
import {useTripList} from './hooks/useTripList';
import {styles} from './styles';

type propTypes = {
  list: dataList;
};

const TripList = ({list}: propTypes) => {
  const {handleMethod} = useTripList();

  return (
    <View style={styles.container}>
      {list.map(item => {
        return (
          <TouchableOpacity
            onPress={() => handleMethod('navigateToTripDetails')?.(item)}
            key={item.id}
            style={styles.cardContainer}>
            <View style={[styles.card, shadow.light]}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TripList;
