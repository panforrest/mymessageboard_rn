import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'

class ListMessages extends Component {
  render(){
    return(
      <View>
        <FlatList
          data = {[
            {user: 'Alice', messageBody: 'What is the agenda for Video 2.1?'}, 
            {user: 'Bob', messageBody: 'Make react native app by sharing codes from react'}, 
            {user: 'Charles', messageBody: 'Task 1 is sharing react app folder structure/componets'}, 
            {user: 'Forrest', messageBody: 'Task 2 update MessageBox, AddMessage, ListMessages'},             
          ]}
          renderItem={
            ({item}) => <Text style={style.item}>{item.user}: {item.messageBody}</Text>
          }
          keyExtractor = {(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 15
  }
})

export default ListMessages