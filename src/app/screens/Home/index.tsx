import React from 'react';
import {ScrollView, View} from 'react-native';
import {TOP_PLACES} from '../../../modules/data';
import MainHeader from '../../components/MainHeader';
import ScreenHeader from '../../components/ScreenHeader';
import SectionHeader from '../../components/SectionHeader';
import TopPlacesCarousel from '../../components/TopPlacesCarousel';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Road Mover" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
