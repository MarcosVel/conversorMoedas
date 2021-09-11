import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Picker from "./src/components/Picker";

import api from "./src/services/api";

export default function App() {
  const [ moedas, setMoedas ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const [ moedaSelecionada, setMoedaSelecionada ] = useState(null);
  const [ moedaBValor, setMoedaBValor ] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all');
      console.log(response.data)
    }

    loadMoedas();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={ styles.container }>
        <View style={ styles.areaMoeda }>
          <Text style={ styles.title }>Selecione sua moeda</Text>
          <Picker  />
        </View>

        <View style={ styles.areaValor }>
          <Text style={ styles.title }>Digite um valor para converter em (R$)</Text>
          <TextInput
            placeholder="Ex.: 150"
            style={ styles.input }
            keyboardType='numeric'
            onChangeText={ (valor) => setMoedaBValor(valor) }
          />
        </View>

        <TouchableOpacity style={ styles.btnArea }>
          <Text style={ styles.btnText }>Converter</Text>
        </TouchableOpacity>

        <View style={ styles.areaResultado }>
          <Text style={ styles.valorConvertido }>
            3 USD
          </Text>
          <Text style={ [ styles.valorConvertido, { fontSize: 18, margin: 10, fontWeight: 'normal' } ] }>
            Corresponde a
          </Text>
          <Text style={ styles.valorConvertido }>
            19,90
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1,
  },
  title: {
    fontSize: 17,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingVertical: 8
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: '#000'
  },
  btnArea: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000'
  }
})