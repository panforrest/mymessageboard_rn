import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import { APIManager } from '../utils'
import MessageRow from './MessageRow'
import { connect } from 'react-redux'
import actions from '../redux/actions' 

class ListMessages extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount(){

    APIManager.get('https://mymessagebo-backend.herokuapp.com/api/message', null, (err, response) => {
      if (err) {
        const msg = err.message || err
        alert(msg)
        return
      }

      console.log('componentDidMount: '+JSON.stringify(response.results))
      const results = response.results
      // this.setState({
      //   messages: restults
      // })
      this.props.messagesReceived(results)
    })
  }

  render(){
    return(
      <View>
        <FlatList
          data = {
            this.props.messages.map((message, index) => {
              return(
                message
              )
            })

          }
          renderItem={
            ({item, index}) => <MessageRow message={item} index={index} style={styles.item}/>
          }
          keyExtractor = {(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 15
  }
})

const stateToProps = (state) => {
  return {
    messages: state.message.list
  }
}

const dispatchToProps = (dispatch) => {
  return{
    messagesReceived: (messages) => dispatch(actions.messagesReceived(messages))
  }
}

export default connect(stateToProps, dispatchToProps)(ListMessages)