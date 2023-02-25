import React from 'react';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../screens/Home';

const Stack = createSharedElementStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
