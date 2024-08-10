import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native';

function CommunityScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Community</Text>
        <Text style={styles.text}>Connect with other users and participate in group challenges.</Text>
        <View style={styles.buttonContainer}>
          <Button title="View Leaderboard" onPress={() => navigation.navigate('Leaderboard')} color="#6200ee" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Join Guild" onPress={() => navigation.navigate('Guilds')} color="#6200ee" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cooperative Challenges" onPress={() => navigation.navigate('CooperativeChallenges')} color="#6200ee" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Community Forum" onPress={() => navigation.navigate('CommunityForum')} color="#6200ee" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default CommunityScreen;
