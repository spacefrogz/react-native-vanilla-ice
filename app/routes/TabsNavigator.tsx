import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { normalizeSizes } from '../utils';
import HomeJourneyNavigator from './HomeJourneyNavigator';
import ProfileJourneyNavigator from './ProfileJourneyNavigator';
import SettingsJourneyNavigator from './SettingsJourneyNavigator';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabContent: {
    top: 0,
    bottom: 0,
    height: 70, // Needs to be the same as in tabBarStyles
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    alignSelf: 'center',
    backgroundColor: '#fbeda5',
    width: 4,
    height: 4,
    borderRadius: normalizeSizes(2),
    marginTop: normalizeSizes(4, 'height'),
  },
  tabBarContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: normalizeSizes(20, 'width'),
    position: 'absolute',
    overflow: 'hidden',
    borderColor: 'transparent',
    justifyContent: 'center',
  },
});

const tabOptions = {
  home: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={{ width: 30, height: 30, fontSize: 30 }}>☄️</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
  profile: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={{ width: 30, height: 30, fontSize: 30 }}>🐸</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
  settings: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={{ width: 30, height: 30, fontSize: 30 }}>🧑🏻‍🚀</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
};

type CustomTabBarProps = {
  insets: any
}

const CustomTabBar: React.FC<BottomTabBarProps & CustomTabBarProps> = (props) => {
  return (
    <View style={[styles.tabBarContainer, { marginBottom: normalizeSizes(props.insets.bottom, 'height') }]}>
      <BlurView
        tint='dark'
        intensity={30}>
        <BottomTabBar { ...props }/>
      </BlurView>
    </View>
  );
};

const TabsNavigator = () => {
  const tabScreenOptions = () => ({
    tabBarStyle: {
      backgroundColor: 'transparent',
      height: 70,
      borderTopWidth: 0,
      elevation: 0,
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#DEf31d',
    tabBarInactiveTintColor: '#0030f0',
  });

  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      initialRouteName={'ProfileJourney'}
      tabBar={(props) => <CustomTabBar {...props}/>}
      screenOptions={tabScreenOptions}>
      <Tab.Screen
        key={'HomeJourney'}
        name={'HomeJourney'}
        options={tabOptions.home}
        component={HomeJourneyNavigator}
      />
      <Tab.Screen
        key={'ProfileJourney'}
        name={'ProfileJourney'}
        options={tabOptions.profile}
        component={ProfileJourneyNavigator}
      />
      <Tab.Screen
        key={'SettingsJourney'}
        name={'SettingsJourney'}
        options={tabOptions.settings}
        component={SettingsJourneyNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
