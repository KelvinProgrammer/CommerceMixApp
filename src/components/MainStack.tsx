import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { AuthScreen } from "./screens/AuthScreen";
import { DashboardScreen } from "./screens/DashboardScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f8fafc",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "CommerceMix" }}
            />
            <StackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={{ title: "Login / Sign Up" }}
            />
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ title: "Dashboard" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);