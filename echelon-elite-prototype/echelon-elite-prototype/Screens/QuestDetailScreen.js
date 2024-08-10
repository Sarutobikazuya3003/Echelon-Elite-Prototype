import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';

function QuestDetailScreen({ route, navigation }) {
  const { quest } = route.params || {};

  const [storyProgress, setStoryProgress] = useState(0);

  const handleChoice = (choice) => {
    // Logic to handle branching storylines
    setStoryProgress(storyProgress + 1);
    console.log(`User chose: ${choice}`);
  };

  if (!quest) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.errorText}>Quest details not available.</Text>
        <Button title="Back to Quests" onPress={() => navigation.navigate('Quests')} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>{quest.title}</Text>
        <Text style={styles.text}>{quest.description}</Text>
        {storyProgress === 0 && (
          <View>
            <Text style={styles.storyText}>You encounter a fork in the road. Do you go left or right?</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Go Left" onPress={() => handleChoice('left')} />
              </View>
              <View style={styles.button}>
                <Button title="Go Right" onPress={() => handleChoice('right')} />
              </View>
            </View>
          </View>
        )}
        {storyProgress === 1 && (
          <View>
            <Text style={styles.storyText}>You meet a mysterious figure. Do you talk to them or ignore them?</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Talk" onPress={() => handleChoice('talk')} />
              </View>
              <View style={styles.button}>
                <Button title="Ignore" onPress={() => handleChoice('ignore')} />
              </View>
            </View>
          </View>
        )}
        <View style={styles.button}>
          <Button title="Back to Quests" onPress={() => navigation.navigate('Quests')} />
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
  storyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default QuestDetailScreen;
