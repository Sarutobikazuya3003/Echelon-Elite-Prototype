import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

function CommunityForumScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Community Forum</Text>
        <TextInput style={styles.searchBar} placeholder="Search forum..." />
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Welcome to the Community Forum!</Text>
          <Text style={styles.postContent}>Feel free to discuss topics and share your experiences here.</Text>
        </View>
        <Button title="New Post" onPress={() => {}} color="#6200ee" />
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
  postContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  postContent: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CommunityForumScreen;
