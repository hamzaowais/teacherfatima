/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TrainingScreen from './Views/TrainingScreen'
import VideoScreen from "./Views/VideosScreen";
import ArticlesScreen from './Views/ArticlesScreen'
import TestsScreen from "./Views/TestsScreen";

import DrawerMenu from './Components/DrawerMenu'


import configs from "./configs.json"

export default class App extends Component<{}> {
  render() {
    return (
      <MyApp />
    );
  }
}


const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Training: {
    screen: TrainingScreen,
  },
  Video: {
    screen: VideoScreen
  },
  Article: {
    screen: ArticlesScreen
  },
  Test: {
    screen: TestsScreen
  }
},{
    initialRouteName: 'Training',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <DrawerMenu  {...props} />


  }
); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
