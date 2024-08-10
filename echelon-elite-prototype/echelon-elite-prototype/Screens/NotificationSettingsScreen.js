import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, StyleSheet, View, Switch } from 'react-native';

function NotificationSettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Notification Settings</Text>
        <Text style={styles.text}>Manage your notification preferences here.</Text>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Push Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#6200ee' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 18,
  },
});

export default NotificationSettingsScreen;
