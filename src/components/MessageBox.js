import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import AddMessage from './AddMessage'
import ListMessages from './ListMessages'

class MessageBox extends Component {
  render(){
  	return(
      <View>
        <Text style={style.heading}>My Message Board</Text>
        <AddMessage />
        <ListMessages />
      </View>
  	)
  }
}

const style = StyleSheet.create({
  heading: {
    padding: 40,
    fontSize: 20
  }
})

export default MessageBox