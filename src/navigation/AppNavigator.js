import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import your screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
// Import Tab Screens (create these placeholder files next)
import HomeScreen from '../screens/HomeScreen';
import InquiryScreen from '../screens/InquiryScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
// You might want to use icons for tabs
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainAppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === 'Home') {
        //     iconName = focused ? 'home' : 'home-outline';
        //   } else if (route.name === 'Inquiry') {
        //     iconName = focused ? 'call' : 'call-outline';
        //   } else if (route.name === 'Chat') {
        //     iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        //   } else if (route.name === 'Profile') {
        //     iconName = focused ? 'person' : 'person-outline';
        //   }
        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hiding header for tab screens, can be configured per screen
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Inquiry" component={InquiryScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="MainApp" component={MainAppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
