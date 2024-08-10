import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function CharacterCustomizationScreen() {
  const [name, setName] = useState('Leo D. Angelo Mekonnen');
  const [level, setLevel] = useState(37);
  const [role, setRole] = useState('Healer');

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Character Customization</Text>
        <TextInput
          placeholder="Character Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Picker
          selectedValue={level}
          style={styles.picker}
          onValueChange={(itemValue) => setLevel(itemValue)}
        >
          {[...Array(100).keys()].map((i) => (
            <Picker.Item key={i} label={`Level ${i + 1}`} value={i + 1} />
          ))}
        </Picker>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Fighter" value="Fighter" />
          <Picker.Item label="Assassin" value="Assassin" />
          <Picker.Item label="Tank" value="Tank" />
          <Picker.Item label="Healer" value="Healer" />
        </Picker>
        <Button title="Save Changes" onPress={() => {}} color="#6200ee" />
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default CharacterCustomizationScreen;
