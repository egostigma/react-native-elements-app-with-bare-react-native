import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import HomeTabs from './HomeTabs';

const HomeNavigator = createStackNavigator(
  {
    Home: HomeTabs,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  }
);

HomeNavigator.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default HomeNavigator;
