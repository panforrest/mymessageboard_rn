import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

class AddMessage extends Component {
  render(){
    return(
      <View>
        <TextInput
          placeholder="User"
          style={style.input}
        />

        <TextInput
          placeholder="Message Body"
          style={style.input}
        />

        <TouchableOpacity
          style={style.button}
        >
          <Text style={style.buttonText}> SUBMIT </Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const style = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5f5f5',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: 'black'
  }
})

export default AddMessage