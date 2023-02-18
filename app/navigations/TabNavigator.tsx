import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import FavoriteScreen from '../screens/Favorite';
import SearchScreen from '../screens/Search';
import icons from '../../src/modules/constants/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Image source={icons.Home} />;
          },
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
