import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TextInput, Button } from 'react-native'

//Declaración de componente InputSection
const InputSection = ({ children, currentNote, editCurrentNote, addNote }) => <View style={Styles.inputSection}>
  <TextInput
    style={Styles.textInput}
    multiline
    onChangeText={(data) => editCurrentNote(data)}
    value={currentNote}
  />
  <View style={Styles.publishOption}>
    <Button
      title='Agregar'
      onPress={addNote}
    />
  </View>
  {children}
</View>

//Declaración de componente ListSection
const ListSection = ({ data }) => <View style={Styles.listSection}>
  <FlatList
    data={data}
    renderItem={({ item }) => <Note textNote={item.key} />}
  />
</View>

//Declaración de componente Note
const Note = ({ textNote }) => <View style={Styles.note}>
  <Text>{textNote}</Text>
</View>

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNote: '',
      notes: []
    }
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <InputSection
          currentNote={this.state.currentNote}
          editCurrentNote={(data) => {
            this.setState({ currentNote: data })
          }}
          addNote={() => {
            this.setState({ notes: this.state.notes.concat({ key: this.state.currentNote }) })
            this.setState({ currentNote: '' })
          }}
        />
        <ListSection data={this.state.notes} />
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
    padding: 8
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
    marginTop: 4,
    marginHorizontal: 4,
    padding: 8
  }
})
