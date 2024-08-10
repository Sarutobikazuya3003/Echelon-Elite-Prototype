import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/background5.jpg')} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome to EchelonElite!</Text>
          <Text style={styles.tagline}>
            It’s time to have fun while you get things done.
            Join over 2 million others improving their life one task at a time.
          </Text>
          <Button
            title="View Quests"
            onPress={() => navigation.navigate('Quests')}
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
  backgroundImage: {
    width: '120%',
    height: '120%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
    opacity: 0.5,
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HomeScreen;
