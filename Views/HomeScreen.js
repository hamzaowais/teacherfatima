import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left, Body, Title ,Right} from 'native-base'

import CustomHeader from '../Components/CustomHeader'


//custom components imports 


class HomeScreen extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={styles.icon}
      />
    ),
  })


  render() {
    return (

      <Container>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

          


          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});