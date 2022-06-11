import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings';


const Stack = createStackNavigator();

const SettingsJourneyNavigator = () => {

  const settingsJourneyOptions = () => ({
    headerShown: false,
    gestureEnabled: true,
  });

  return (
    <Stack.Navigator
      initialRouteName={'SettingsScreen'}
      screenOptions={settingsJourneyOptions}>
      <Stack.Screen key={'SettingsScreen'} name={'SettingsScreen'} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsJourneyNavigator;
