import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Icon,
  Button,
  Right,
  Drawer,
} from 'native-base';

import Home from '../../components/Home';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';

 export default class MainDrawer extends Component {
  closeDrawer() {
    this.drawer._root.close()
  }

  openDrawer() {
    this.drawer._root.open()
  }

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');

  }

  render() {
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >
      <Container>
        <Header style={styles.container}>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()} >
              <Icon name='menu' style={{color: "#FFF"}} />
            </Button>
          </Left>
          <View>
            <Title style={styles.title}>Stories</Title>
          </View>
          <Right />
          <Left style={styles.signOut}>
            <Button transparent onPress={()=> this.signOut()} >
              <FontAwesome name='exchange' size={15} style={{color: "#FFF"}} />
            </Button>
          </Left>
        </Header>
          <Home />
          <Footer />
      </Container>
      </Drawer>
    );
  }
}

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
    paddingLeft: 70,

  },
  signOut: {
    paddingLeft: 50,
  }
});
