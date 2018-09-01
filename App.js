import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    items: new Array(100).fill(0).map((a, i) => i).map(i => ({
      title: `Note title ${i}`,
      content: `Note content  #${i}. This is my ${i} note.`,
    })),
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>List off my notes</Text>
          {this.state.items.map(({ title, content }) => (
            <View key={title} style={styles.item}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.content}>{content}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
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
    borderBottomColor: 'black',
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
