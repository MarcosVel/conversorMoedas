import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker from "./src/components/Picker";

export default function App() {
  return (
    <View style={ styles.container }>
      <View style={ styles.areaMoeda }>
        <Text style={ styles.title }>Selecione sua moeda</Text>
        <Picker />
      </View>
    </View>
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
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
    
  }
})