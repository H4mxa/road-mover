/* eslint-disable react/no-unstable-nested-components */
import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/Favorite';
import SearchScreen from '../screens/Search';
import Icon from '../components/Icons';
import {colors, sizes} from '../../modules/constants/theme';
import {Animated} from 'react-native';
import {styles} from './styles';
import {iconTypes} from '../../modules/constants/icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    screen: HomeNavigator,
  },
  {
    name: 'Search',
    screen: SearchScreen,
  },
  {
    name: 'Favorite',
    screen: FavoriteScreen,
  },
];

const TabNavigator = () => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => (
                  <Icon
                    icon={name as iconTypes}
                    size={40}
                    style={{tintColor: focused ? colors.primary : colors.gray}}
                  />
                ),
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[styles.indicator, {transform: [{translateX: offsetAnimation}]}]}
      />
    </>
  );
};

export default TabNavigator;
