import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';


const Stack = createStackNavigator();

const HomeJourneyNavigator = () => {

  const homeJourneyOptions = () => ({
    headerShown: false,
    gestureEnabled: true,
  });

  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={homeJourneyOptions}>
      <Stack.Screen key={'HomeScreen'} name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeJourneyNavigator;
