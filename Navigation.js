import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="Botones"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Imagen"
                component={StackScreen}
                options={{
                    headerBackVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple',
        }}
        >
        <Tab.Screen 
            name="Home" 
            component={MyStack}
            options={{
                tabBarLabel: 'bottones',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="alpha-b-circle" color={color} size={30}/>
                ),
                /* tabBarBadge: 1, */
                headerShown: false,

            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'video',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="movie-open" color={color} size={30}/>
                ),
                headerShown: false,
            }}
        />
        
    </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}