import React from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {shadow} from '../../../modules/constants/theme';
import {dataList} from './core/types';
import Card from './core/constants';
import {styles} from './styles';
import FavoriteButton from '../FavoriteButton';
import {useTopPlacesCarousel} from './hooks/useTopPlacesCarousel';
import {SharedElement} from 'react-navigation-shared-element';

type propTypes = {
  list: dataList;
};

const TopPlacesCarousel = ({list}: propTypes) => {
  const {handleMethod} = useTopPlacesCarousel();
  return (
    <FlatList
      data={list}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={Card.CARD_WIDTH_SPACING}
      decelerationRate="fast"
      keyExtractor={i => i.id as any}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => handleMethod('navigateToTripDetails')?.(item)}
            style={styles({index, list}).cardContainer}>
            <View style={[styles({}).card, shadow.dark]}>
              <FavoriteButton style={styles({}).favorite} active />
              <SharedElement
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}>
                <View style={styles({}).imageBox}>
                  <Image source={item.image} style={styles({}).image} />
                </View>
              </SharedElement>
              <View style={styles({}).titleBox}>
                <Text style={styles({}).title}>{item.title}</Text>
                <Text style={styles({}).location}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopPlacesCarousel;
