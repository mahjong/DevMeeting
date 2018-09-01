import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    actions: [],
    value: '',
  };


  render() {
    return (
      <View style={styles.container}>
      <View>

      </View>
      <TextInput
                placeholder="Enter text"
                returnKeyType="done"
                value={this.state.value}
                onChangeText={this.textChanged}
                onSubmitEditing={this.submit}
              />
        <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>List of my notes</Text>
        {this.state.actions.map(({ content }) => (
          <View key={content} style={styles.item}>
            <Text style={styles.content}>{content}</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    );
  }
  textChanged = text =>
    this.setState(state => ({
      value: text,
    }));

  submit = text =>
  this.setState(state => ({
    actions: state.actions.concat({
      content: state.value,
    }),
    value: '',
  }));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'aliceblue',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: 'blueviolet',
    color: 'white',
    padding: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  content: {
    marginBottom: 10,
  }
});
