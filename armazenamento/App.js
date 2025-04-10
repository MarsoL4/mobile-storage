import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const key = '2TDSPK-2025'
  const [valorInput, alteraValorInput] = useState('')
  const save = () => {
    saveData(key, valorInput);
  }

  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log('[Error][saveData]');
    }
  };

  const leData = async (key) => {
    return AsyncStorage.getItem(key)
  }

  return (
    <View style={styles.container}>
      <TextInput value={valorInput} onChangeText={alteraValorInput}></TextInput>
      <Button title='Salvar' onPress={save}>
      </Button>
      <Button title='Ler' onPress={() => {}}></Button>
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
});
