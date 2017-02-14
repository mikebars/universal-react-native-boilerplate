import { AppRegistry } from 'react-native';

import App from './scenes/App';

const rootTag = document.getElementById('root');

AppRegistry.registerComponent('UniversalReactNative', () => App);
AppRegistry.runApplication('UniversalReactNative', { rootTag });
