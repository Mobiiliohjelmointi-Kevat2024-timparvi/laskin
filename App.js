import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [result, setResult] = useState('');


  const sumNumbers = () => {
    const sum = parseInt(numOne) + parseInt(numTwo);
    setResult(sum.toString());
  }

  const subtractNumbers = () => {
    const difference = parseInt(numOne) - parseInt(numTwo);
    setResult(difference.toString());
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={numOne}
      onChangeText={(text) => {
        let newText = text.replace(/[^0-9]/g, '');
        setNumOne(newText);
      }}
      />
      <View style={styles.buttonContainer}>
      <Button title= "+" onPress={sumNumbers} />
      <Button title= "-" onPress={subtractNumbers} />
      </View>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={numTwo}
      onChangeText={(text) => {
        let newText = text.replace(/[^0-9]/g, '');
        setNumTwo(newText);
      }}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '20%', 
    justifyContent: 'space-around', // This spreads the buttons out evenly
  }
});
