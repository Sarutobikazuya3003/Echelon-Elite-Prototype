import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, StyleSheet, View } from 'react-native';

function AccountManagementScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Account Management</Text>
        <Text style={styles.text}>Manage your account settings here.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Change Password" onPress={() => {}} color="#6200ee" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Update Email" onPress={() => {}} color="#6200ee" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Delete Account" onPress={() => {}} color="#6200ee" />
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

export default AccountManagementScreen;
