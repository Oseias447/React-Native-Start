import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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

import Home from '../components/Home';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

 export default class MainDrawer extends Component {
   closeDrawer() {
     this.drawer._root.close()
   }

   openDrawer() {
     this.drawer._root.open()
   }

  render() {
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()} >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Inicio</Title>
          </Body>
          <Right />
        </Header>
          <Home />
          <Footer />
      </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    top: 15,
    position: "relative",
  },
});
