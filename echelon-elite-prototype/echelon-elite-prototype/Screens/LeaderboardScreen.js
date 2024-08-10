import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';

const leaderboardData = [
  { name: 'Player1', category: 'Fitness', achievement: 'Completed 50 workouts', icon: require('../assets/avatar1.webp') },
  { name: 'Player2', category: 'Education', achievement: 'Read 30 books', icon: require('../assets/avatar2.webp') },
  { name: 'Player3', category: 'Wellness', achievement: 'Meditated for 100 hours', icon: require('../assets/avatar3.webp') },
  { name: 'Player4', category: 'Health', achievement: 'Cooked 20 healthy meals', icon: require('../assets/avatar4.jpg') },
  { name: 'Player5', category: 'Outdoor', achievement: 'Completed 10 hikes', icon: require('../assets/avatar5.webp') },
];

function LeaderboardScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Leaderboard</Text>
        {leaderboardData.map((player, index) => (
          <View key={index} style={styles.playerContainer}>
            <Image source={player.icon} style={styles.playerIcon} />
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerCategory}>{player.category}</Text>
              <Text style={styles.playerAchievement}>{player.achievement}</Text>
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
  playerContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%', // Ensured consistent width
  },
  playerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerCategory: {
    fontSize: 14,
    color: 'gray',
  },
  playerAchievement: {
    fontSize: 14,
    color: 'blue',
  },
});

export default LeaderboardScreen;
