import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TextInput, Button } from 'react-native'

//Declaración de componente InputSection
const InputSection = ({ children }) => <View style={Styles.inputSection}>
  <TextInput
    style={Styles.textInput}
    multiline
  />
  <View style={Styles.publishOption}>
    <Button
      title='Agregar'
      onPress={() => { }}
    />
  </View>
  {children}
</View>

//Declaración de componente ListSection
const ListSection = () => <View style={Styles.listSection}>
  <FlatList
    data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
    renderItem={({ item }) => <Note textNote={item.key} />}
  />
</View>

//Declaración de componente Note
const Note = ({ textNote }) => <View style={Styles.note}>
  <Text>{textNote}</Text>
</View>

export default class Notes extends Component {



  render() {
    return (
      <View style={Styles.mainContainer}>
        <InputSection />
        <ListSection />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8
  },
  inputSection: {
    height: 80,
    backgroundColor: 'rgba(0,0,255,0.2)',
    flexDirection: 'row',
    marginBottom: 8
  },
  textInput: {
    flex: 1,
    margin: 4,
    backgroundColor: 'rgba(255,0,0,0.2)',
    padding:8
  },
  publishOption: {
    margin: 4,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.2)'
  },
  listSection: {
    flex: 1,
    backgroundColor: 'rgba(0,255,0,0.2)'
  },
  note: {
    backgroundColor: 'rgba(255,0,0,0.2)',
    marginTop:4,
    marginHorizontal: 4,
    padding:8
  }
})
