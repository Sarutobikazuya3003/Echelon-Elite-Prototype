import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function CreateQuestScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const handleCreateQuest = () => {
    // Logic to save the quest
    console.log('Quest created:', { title, description, difficulty, duration, category });
    navigation.navigate('Quests');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Create a New Quest</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Picker
          selectedValue={difficulty}
          style={styles.picker}
          onValueChange={(itemValue) => setDifficulty(itemValue)}
        >
          <Picker.Item label="Select Difficulty" value="" />
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
        <Picker
          selectedValue={duration}
          style={styles.picker}
          onValueChange={(itemValue) => setDuration(itemValue)}
        >
          <Picker.Item label="Select Duration" value="" />
          <Picker.Item label="15 mins" value="15 mins" />
          <Picker.Item label="30 mins" value="30 mins" />
          <Picker.Item label="1 hour" value="1 hour" />
          <Picker.Item label="2 hours" value="2 hours" />
        </Picker>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Fitness" value="Fitness" />
          <Picker.Item label="Education" value="Education" />
          <Picker.Item label="Wellness" value="Wellness" />
          <Picker.Item label="Health" value="Health" />
          <Picker.Item label="Outdoor" value="Outdoor" />
          <Picker.Item label="Chores" value="Chores" />
          <Picker.Item label="Music" value="Music" />
        </Picker>
        <Button title="Create Quest" onPress={handleCreateQuest} color="#6200ee" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    marginBottom: 10,
  },
});

export default CreateQuestScreen;
