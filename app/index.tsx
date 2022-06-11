import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationProvider from './routes/NavigatorProvider';
import TabsNavigator from './routes/TabsNavigator';

const Stack = createNativeStackNavigator();

const App = () => {

    const screenOptions = {
        headerShown: false,
    };

    return (
        <SafeAreaProvider>
            {Platform.OS === 'ios' && <StatusBar
                translucent
                animated
                barStyle='default'
            />}
            <NavigationProvider>
                <Stack.Navigator
                    initialRouteName={'AppTabs'}
                    screenOptions={screenOptions}>
                    <Stack.Group>
                        <Stack.Screen
                            name={'AppTabs'}
                            component={TabsNavigator}
                        />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationProvider>
        </SafeAreaProvider>
    );
};

export default App;
