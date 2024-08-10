import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Image, View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { List } from 'react-native-paper';

function QuestsScreen({ navigation }) {
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');

  const quests = [
    {
      title: 'Daily Fitness Challenge',
      description: 'Complete your daily 30-minute workout',
      difficulty: 'Easy',
      duration: '30 mins',
      category: 'Fitness',
      icon: 'run-fast'
    },
    {
      title: 'Read a Book',
      description: 'Read 20 pages of a self-help book',
      difficulty: 'Medium',
      duration: '1 hour',
      category: 'Education',
      icon: 'book-open-page-variant'
    },
    {
      title: 'Meditation Practice',
      description: 'Practice meditation for 15 minutes',
      difficulty: 'Easy',
      duration: '15 mins',
      category: 'Wellness',
      icon: 'meditation'
    },
    {
      title: 'Write a Journal',
      description: 'Write 2 pages in your journal',
      difficulty: 'Medium',
      duration: '30 mins',
      category: 'Wellness',
      icon: 'notebook'
    },
    {
      title: 'Cook a New Recipe',
      description: 'Try cooking a new healthy recipe',
      difficulty: 'Hard',
      duration: '2 hours',
      category: 'Health',
      icon: 'chef-hat'
    },
    {
      title: 'Learn a New Skill',
      description: 'Spend an hour learning a new skill online',
      difficulty: 'Medium',
      duration: '1 hour',
      category: 'Education',
      icon: 'school'
    },
    {
      title: 'Gardening',
      description: 'Spend 30 minutes gardening',
      difficulty: 'Easy',
      duration: '30 mins',
      category: 'Outdoor',
      icon: 'flower'
    },
    {
      title: 'Clean the House',
      description: 'Clean your living space for 1 hour',
      difficulty: 'Medium',
      duration: '1 hour',
      category: 'Chores',
      icon: 'broom'
    },
    {
      title: 'Morning Run',
      description: 'Go for a 5 km run',
      difficulty: 'Hard',
      duration: '1 hour',
      category: 'Fitness',
      icon: 'run'
    },
    {
      title: 'Practice an Instrument',
      description: 'Practice playing a musical instrument for 30 minutes',
      difficulty: 'Medium',
      duration: '30 mins',
      category: 'Music',
      icon: 'music'
    },
  ];

  const filteredQuests = quests.filter((quest) => {
    return (
      (difficulty ? quest.difficulty === difficulty : true) &&
      (duration ? quest.duration === duration : true) &&
      (category ? quest.category === category : true)
    );
  });

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <Image source={require('../assets/avatar.webp')} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Leo D. Angelo Mekonnen</Text>
            <Text style={styles.profileLevel}>Level 37 Assassin</Text>
            <View style={styles.profileStats}>
              <Text style={styles.statLabel}>Health: 50 / 50</Text>
              <Text style={styles.statLabel}>Experience: 342 / 850</Text>
              <Text style={styles.statLabel}>Mana: 245 / 272</Text>
            </View>
          </View>
        </View>
        <Text style={styles.subheader}>Your Quests</Text>
        <View style={styles.filters}>
          <Picker
            selectedValue={difficulty}
            style={styles.picker}
            onValueChange={(itemValue) => setDifficulty(itemValue)}
          >
            <Picker.Item label="All Difficulties" value="" />
            <Picker.Item label="Easy" value="Easy" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Hard" value="Hard" />
          </Picker>
          <Picker
            selectedValue={duration}
            style={styles.picker}
            onValueChange={(itemValue) => setDuration(itemValue)}
          >
            <Picker.Item label="All Durations" value="" />
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
            <Picker.Item label="All Categories" value="" />
            <Picker.Item label="Fitness" value="Fitness" />
            <Picker.Item label="Education" value="Education" />
            <Picker.Item label="Wellness" value="Wellness" />
            <Picker.Item label="Health" value="Health" />
            <Picker.Item label="Outdoor" value="Outdoor" />
            <Picker.Item label="Chores" value="Chores" />
            <Picker.Item label="Music" value="Music" />
          </Picker>
        </View>
        <List.Section style={styles.listSection}>
          {filteredQuests.map((quest, index) => (
            <List.Item
              key={index}
              title={quest.title}
              description={quest.description}
              left={() => <List.Icon icon={quest.icon} color="#76c7c0" />}
              onPress={() => navigation.navigate('QuestDetail', { quest })}
              style={styles.listItem}
            />
          ))}
        </List.Section>
        <View style={styles.buttonContainer}>
          <Button title="Community" onPress={() => navigation.navigate('Community')} color="#6200ee" />
          <Button title="Anomaly Events" onPress={() => navigation.navigate('AnomalyEvents')} color="#6200ee" />
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
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#4a4e69',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  profileLevel: {
    fontSize: 14,
    color: 'white',
  },
  profileStats: {
    marginTop: 10,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  listSection: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default QuestsScreen;
