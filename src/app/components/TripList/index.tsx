import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {shadow} from '../../../modules/constants/theme';
import FavoriteButton from '../FavoriteButton';
import {dataList} from '../TopPlacesCarousel/core/types';
import {styles} from './styles';

type propTypes = {
  list: dataList;
};

const TripList = ({list}: propTypes) => {
  return (
    <View style={styles.container}>
      {list.map(item => {
        return (
          <TouchableOpacity style={styles.cardContainer}>
            <View key={item.id} style={[styles.card, shadow.light]}>
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
