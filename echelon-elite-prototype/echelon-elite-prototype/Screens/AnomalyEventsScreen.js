import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native';

const anomalyEvents = [
  { id: '1', title: 'Dragon Encounter', description: 'Battle the fearsome dragon in the mountains.' },
  { id: '2', title: 'Mystic Forest', description: 'Explore the enchanted forest and its secrets.' },
];

function AnomalyEventsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Anomaly Events & Challenges</Text>
        {anomalyEvents.map((event) => (
          <View key={event.id} style={styles.eventContainer}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Button title="Start Event" onPress={() => {}} color="#6200ee" />
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
  eventContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  eventDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AnomalyEventsScreen;
