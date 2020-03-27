import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { APIManager } from '../utils'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class AddMessage extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      messageBody: ''
    }
  }

  handleSubmit = () => {
    APIManager.post('https://mymessagebo-backend.herokuapp.com/api/message', this.state, (err, response) => {
      if (err) {
        const msg = err.message || err
        alert(msg)
        return
      }

      console.log('componentDidMount: '+JSON.stringify(response))
      var result = response.result
      this.props.messageCreated(result)
    })
  }

  render(){
    return(
      <View>
        <TextInput
          placeholder="User"
          style={style.input}
          onChangeText = { user => this.setState
            ({user: user})
          }
        />

        <TextInput
          placeholder="Message Body"
          style={style.input}
          onChangeText = { messageBody => this.setState
            ({messageBody: messageBody})
          }
        />

        <TouchableOpacity
          style={style.button}
          onPress={this.handleSubmit}
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

const stateToProps = (state) => {
  return {
    messages: state.message.list
  }
}

const dispatchToProps = (dispatch) => {
  return{
    messageCreated: (message) => dispatch(actions.messageCreated(message))
  }
}

export default connect(stateToProps, dispatchToProps)(AddMessage)