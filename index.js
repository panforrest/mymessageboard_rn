/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import MessageBox from './src/components/MessageBox';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MessageBox);
