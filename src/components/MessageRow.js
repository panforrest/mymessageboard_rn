import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

class MessageRow extends Component {

  render(){
    const {
      message,
      index
    } = this.props

    return(
      <View key={message.id} 
        style={[
          styles.row,
          {backgroundColor: index % 2 === 0 ? 'white': '#F3f3f7'}
        ]}  
      >
        <Text>{message.user}: {message.messageBody}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
  	flexDirection: 'row'
  }
})

export default MessageRow