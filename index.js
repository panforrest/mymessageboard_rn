/**
 * @format
 */
import React, { Component }  from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import MessageBox from './src/components/MessageBox';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import store from './src/redux/store'

class App extends Component {
  render(){
  	return(
      <Provider store={store.configureStore()}>
        <MessageBox />
      </Provider>
  	)
  }
}

AppRegistry.registerComponent(appName, () => App);
