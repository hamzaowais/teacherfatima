import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import { Header, Body, Title, Content, Left, Icon, Right,Container, Footer } from 'native-base'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})


class DrawerMenu extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        };
    }

    componentDidMount(props) {
        //get 
        
        
    }

    render(props) {
        
        return (
            <Container>
                <Header style={styles.drawerHeader}>
                    <Body>
                        <Image
                            style={styles.drawerImage}
                            source={require('../img/user.png')} />
                            <Text>User Name</Text>
                    </Body>
                </Header>
            <Content>
                <DrawerItems {...this.props} />
            </Content>
            <Footer>
            <Text>logout</Text>
            </Footer>
          </Container>
        );
    }
}
export default DrawerMenu;