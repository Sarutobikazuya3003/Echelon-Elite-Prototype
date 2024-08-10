import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Button } from 'react-native';

const guildsData = [
  { name: 'Fitness Guild', description: 'A community for fitness enthusiasts to share tips and workouts.', icon: require('../assets/Guild1.jpg') },
  { name: 'Education Guild', description: 'Join us to discuss books, courses, and all things educational.', icon: require('../assets/Guild2.jpg') },
  { name: 'Wellness Guild', description: 'Focus on mental well-being and mindfulness practices.', icon: require('../assets/Guild3.jpg') },
  { name: 'Health Guild', description: 'Explore healthy eating and cooking tips.', icon: require('../assets/Guild4.jpg') },
  { name: 'Outdoor Guild', description: 'For those who love hiking, camping, and outdoor activities.', icon: require('../assets/Guild5.jpg') },
  { name: 'Chores Guild', description: 'Motivate each other to stay on top of household chores.', icon: require('../assets/Guild6.jpg') },
  { name: 'Music Guild', description: 'Share your music practice routines and tips.', icon: require('../assets/Guild7.webp') },
];

function GuildsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Guilds</Text>
        {guildsData.map((guild, index) => (
          <View key={index} style={styles.guildContainer}>
            <Image source={guild.icon} style={styles.guildIcon} />
            <View style={styles.guildInfo}>
              <Text style={styles.guildName}>{guild.name}</Text>
              <Text style={styles.guildDescription}>{guild.description}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Join" onPress={() => {}} color="#6200ee" />
                <View style={styles.buttonSpacer} />
                <Button title="Decline" onPress={() => {}} color="#6200ee" />
              </View>
            </View>
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
  guildContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  guildIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  guildInfo: {
    flex: 1,
  },
  guildName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  guildDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSpacer: {
    width: 10,
  },
});

export default GuildsScreen;
