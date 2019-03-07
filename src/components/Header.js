import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import {
  Container,
  Left,
  Icon,
  Button,
  Right,
  Drawer,
  Badge,
  Text,
  Header,
  View,
} from 'native-base';

class HeaderNavigation extends Component {

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');

  }

  render() {
    return(
      <Header style={styles.container}>
        <Left>
          <Button transparent onPress={this.props.onPress} >
            <Icon name='menu' style={{color: "#FFF"}} />
          </Button>
        </Left>
          <Button transparent onPress={()=> {}} style={{left: 30}}>
            <FontAwesome name='home' size={24} style={{color: "#FFF"}} />
          </Button>
          <Button transparent onPress={()=> this.props.navigation.navigate('Messages')} style={{left: 65}}>
            <FontAwesome name='envelope-o' size={24} style={{color: "#FFF"}} />
          </Button>
          <Button badge transparent onPress={()=> this.props.navigation.navigate('Notification')} style={{left: 95}}>
            <FontAwesome name='bell-o' size={24} style={{color: "#FFF"}} /><Badge><Text style={{fontSize: 12}}>3</Text></Badge>
          </Button>
        <Right />
        <View>
          <Left style={styles.signOut}>
            <Button transparent onPress={()=> this.signOut()}>
              <FontAwesome name='exchange' size={15} style={{color: "#FFF"}} />
            </Button>
          </Left>
        </View>
      </Header>
    )
  }
}

export default withNavigation(HeaderNavigation);

const styles = StyleSheet.create({
  container: {
    height: 30 + getStatusBarHeight(),
    paddingTop: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    position: "absolute",
    top: -10,
    paddingLeft: 60,

  },
  signOut: {
    position: "relative",
    flexDirection: "row",
    top: 0,
  }
});
