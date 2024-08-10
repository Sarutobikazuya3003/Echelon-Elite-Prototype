import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, StyleSheet, View } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Settings</Text>
        <Text style={styles.text}>Adjust your app settings and preferences here.</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Account Management"
            onPress={() => navigation.navigate('AccountManagement')}
            color="#6200ee"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Notification Settings"
            onPress={() => navigation.navigate('NotificationSettings')}
            color="#6200ee"
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
});

export default SettingsScreen;
