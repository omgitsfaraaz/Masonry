import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens constants
import { screens } from '../constants';
// Screens
import LandingScreen from '../Pages/LandingScreen/LandingScreen';
import MasonryScreen from '../Pages/Masonry/MasonryScreen';

export default function RootNavigator() {
    const { Navigator, Screen } = createNativeStackNavigator();

    const navigationDefaultTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#303030",
        },
    };

    const initialRouteName = screens.landingScreen;

    return (
        <SafeAreaProvider>
            <StatusBar barStyle="light-content" />
            <NavigationContainer>
                <Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                    <Screen name={screens.landingScreen} component={LandingScreen} />
                    <Screen name={screens.masonry} component={MasonryScreen} />
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

