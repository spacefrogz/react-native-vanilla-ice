import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';


const Stack = createStackNavigator();

const ProfileJourneyNavigator = () => {

  const profileJourneyOptions = () => ({
    headerShown: false,
    gestureEnabled: true,
  });

  return (
    <Stack.Navigator
      initialRouteName={'ProfileScreen'}
      screenOptions={profileJourneyOptions}>
      <Stack.Screen key={'ProfileScreen'} name={'ProfileScreen'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileJourneyNavigator;
