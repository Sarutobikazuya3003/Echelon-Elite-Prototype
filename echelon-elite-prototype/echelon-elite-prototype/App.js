import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from './Screens/HomeScreen';
import QuestsScreen from './Screens/QuestsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import CharacterCustomizationScreen from './Screens/CharacterCustomizationScreen';
import CommunityScreen from './Screens/CommunityScreen';
import AnomalyEventsScreen from './Screens/AnomalyEventsScreen';
import QuestDetailScreen from './Screens/QuestDetailScreen';
import LeaderboardScreen from './Screens/LeaderboardScreen';
import GuildsScreen from './Screens/GuildsScreen';
import AccountManagementScreen from './Screens/AccountManagementScreen';
import NotificationSettingsScreen from './Screens/NotificationSettingsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Quests') {
                iconName = focused ? 'sword' : 'sword-cross';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              } else if (route.name === 'CharacterCustomization') {
                iconName = focused ? 'account-edit' : 'account-edit-outline';
              } else if (route.name === 'Community') {
                iconName = focused ? 'account-group' : 'account-group-outline';
              } else if (route.name === 'AnomalyEvents') {
                iconName = focused ? 'star' : 'star-outline';
              } else if (route.name === 'QuestDetail') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Leaderboard') {
                iconName = focused ? 'trophy' : 'trophy-outline';
              } else if (route.name === 'Guilds') {
                iconName = focused ? 'shield-account' : 'shield-account-outline';
              } else if (route.name === 'AccountManagement') {
                iconName = focused ? 'account-settings' : 'account-settings-outline';
              } else if (route.name === 'NotificationSettings') {
                iconName = focused ? 'bell' : 'bell-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Quests" component={QuestsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="CharacterCustomization" component={CharacterCustomizationScreen} />
          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen name="AnomalyEvents" component={AnomalyEventsScreen} />
          <Tab.Screen name="QuestDetail" component={QuestDetailScreen} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
          <Tab.Screen name="Guilds" component={GuildsScreen} />
          <Tab.Screen name="AccountManagement" component={AccountManagementScreen} />
          <Tab.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
});

export default App;
