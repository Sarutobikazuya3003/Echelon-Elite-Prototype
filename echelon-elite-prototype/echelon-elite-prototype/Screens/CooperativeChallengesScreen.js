import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, TextInput } from 'react-native';

const challengesData = [
  { title: 'Fitness Challenge', description: 'Complete 100 push-ups with a partner.', difficulty: 'Medium' },
  { title: 'Education Challenge', description: 'Study a new language together for 30 minutes daily.', difficulty: 'Easy' },
];

function CooperativeChallengesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Cooperative Challenges</Text>
        <TextInput style={styles.searchBar} placeholder="Search challenges..." />
        {challengesData.map((challenge, index) => (
          <View key={index} style={styles.challengeContainer}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            <Text style={styles.challengeDifficulty}>Difficulty: {challenge.difficulty}</Text>
            <Button title="Join Challenge" onPress={() => {}} color="#6200ee" />
          </View>
        ))}
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
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  challengeContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  challengeDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  challengeDifficulty: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CooperativeChallengesScreen;
