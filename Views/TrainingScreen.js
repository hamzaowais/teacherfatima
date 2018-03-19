import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left, Body, Title ,Right,Card,CardItem,Thumbnail} from 'native-base'



import CustomHeader from '../Components/CustomHeader'


//custom components imports 


class TrainingScreen extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: "Training",
    drawerLabel: 'Training',
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
        <CustomHeader title="Training" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/home.png')} />
                <Body>
                  <Text>Teacher Fatima Training 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
             <CardItem cardBody>
              <Image source={require('../img/kids1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem >
              <Body>
                <Text>
                  //Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/home.png')} />
                <Body>
                  <Text>Teacher Fatima Training 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
             <CardItem cardBody>
              <Image source={require('../img/kids1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem >
              <Body>
                <Text>
                  //Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/home.png')} />
                <Body>
                  <Text>Teacher Fatima Training 1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
             <CardItem cardBody>
              <Image source={require('../img/kids1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem >
              <Body>
                <Text>
                  //Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>

      </Container>

    )
  }

}

export default TrainingScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});