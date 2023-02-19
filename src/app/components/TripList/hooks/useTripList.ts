/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useTripList = () => {
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
