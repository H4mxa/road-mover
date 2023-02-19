/* eslint-disable curly */

import {useCallback} from 'react';

export const useTripDetails = () => {
  const navigateToTripDetailsScreen = useCallback((navigation: any) => {
    navigation.goBack();
  }, []);

  const handleMethod = (type: string) => {
    if (type === 'goBack') return navigateToTripDetailsScreen;

    return undefined;
  };

  return {handleMethod};
};
