import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Picker from './src/components/Picker';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <Picker />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>
          Digite um valor para converter em (R$)
        </Text>
        <TextInput
          placeholder="Ex: 150"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.buttonArea}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.areaCotacao}>
        <Text style={styles.cotacaoText}>3 USD</Text>
        <Text style={[styles.cotacaoText, {fontSize: 18, margin: 0}]}>
          Corresponde a
        </Text>
        <Text style={styles.cotacaoText}>30,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40,
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 2,
  },
  titulo: {
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 15,
    color: '#000',
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingBottom: 8,
    paddingTop: 8,
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    paddingLeft: 16,
    color: '#000',
    marginTop: 8,
  },
  buttonArea: {
    padding: 10,
    width: '90%',
    backgroundColor: '#E00',
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaCotacao: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cotacaoText: {
    margin: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default App;
