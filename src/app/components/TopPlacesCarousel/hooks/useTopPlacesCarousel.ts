/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */

import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useTopPlacesCarousel = () => {
  const navigation: any = useNavigation();

  const navigateToTripDetailsScreen = useCallback((item: any) => {
    navigation.navigate('TripDetails', {trip: item});
  }, []);

  const handleMethod = (type: string) => {
    if (type === 'navigateToTripDetails') return navigateToTripDetailsScreen;

    return undefined;
  };

  return {handleMethod};
};
