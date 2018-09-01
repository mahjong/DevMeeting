import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Button } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    items: [
      { id: 1, name: 'Foo', title:'Note title 1' },
      { id: 2, name: 'Bar', title: 'Note title 2' },
      { id: 3, name: 'Foo3',  title:'Note title 3'}
    ],
    value: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Home</Text>
          <TextInput
              placeholder="Enter text"
              returnKeyType="done"
              value={this.state.value}
              onChangeText={this.textChanged}
              onSubmitEditing={this.submit}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>List of my notes</Text>
          {this.state.items.map(item => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.content}>{item.name}</Text>
              <Button
                key={item.id}
                title={`Show item ${item.id}`}
                onPress={() => this.props.navigation.navigate('Item', item)}
              />
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

  submit = () =>
  this.setState(state => ({
    items: state.items.concat({
      id: state.items.length + 1,
      name: state.value,
      title: state.value,
    }),
    value: '',
  }));
}


const ItemScreen = ({ navigation }) => (
  <View>
    <Text>Item #{navigation.state.params.id}</Text>
    <Text>Item #{navigation.getParam('id', '-')}</Text>
    <Text>{navigation.getParam('name', 'No name')}</Text>
    <Text>{navigation.getParam('title', 'No title')}</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);
ItemScreen.navigationOptions = ({ navigation }) => ({title: `Item #${navigation.getParam('id')}`})

const Navigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Item: {
      screen: ItemScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
