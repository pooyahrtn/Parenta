import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { sum, secret_key } from './src/math';

const response = [
  {
    id: '1',
    title: 'انجمن اولیا مربیان',
    date: '13 bahman'
  },
  {
    id: '2',
    title: 'ستاد ثبت نام',
    date: '16 day'
  },
  {
    id: '3',
    title: 'تعطیلی مدارس',
    date: '18 mehr'
  }
]

class Message extends Component {
  render() {
    return (
      <View style={{ padding: 5, marginVertical: 5, width: '100%', alignItems: 'flex-end' }}>
        <Text style={{ fontWeight: 'bold' }}>
          {this.props.title}
        </Text>
        <Text>{this.props.date}</Text>
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={response}
          renderItem={({ item }) =>
            <Message
              title={item.title}
              date={item.date}
            />}
            keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}


