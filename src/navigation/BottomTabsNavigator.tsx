import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'
import { AddScreen, HomeScreen, ProfileScreen, ReelsScreen, SearchScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderColor: 'transparent',
          paddingTop: 20
        },
        tabBarShowLabel: false
      }}
      sceneContainerStyle={{
        backgroundColor: '#000'
      }}
      >
      <Tab.Screen name="Home" options={{tabBarIcon: () => <Icon name='home' color={'#fff'} size={30} /> }} component={HomeScreen} />
      <Tab.Screen name="Search" options={{tabBarIcon: () => <Icon name='search' color={'#fff'} size={30} /> }} component={SearchScreen} />
      <Tab.Screen name="Add" options={{tabBarIcon: () => <Icon name='add-circle' color={'#fff'} size={30} /> }} component={AddScreen} />
      <Tab.Screen name="Reels" options={{tabBarIcon: () => <Icon name='videocam' color={'#fff'} size={30} /> }} component={ReelsScreen} />
      <Tab.Screen name="Profile" options={{tabBarIcon: () => <Icon name='person-circle' color={'#fff'} size={30} /> }} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
