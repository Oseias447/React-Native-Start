import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import {
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Left,
    Body,
    Icon,
    Right,
    Button,
 } from 'native-base';

 import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

class SideBar extends Component {

  signOut = () => {
    const { navigation } = this.props;

    AsyncStorage.clear();

    navigation.navigate('Login');

  }

  chatBox = () => {
    const { navigation } = this.props;

    navigation.navigate('Messages')
  }

  render() {
    return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.title}>Bem Vindo!</Text>
      </Header>
      <Content>
        <ListItem icon>
          <Left>
            <Button
            onPress={()=> this.chatBox()}
            style={{ top: 4 }}>
              <Icon name="chatboxes" size={25} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Menssagens</Text>
          </Body>
          <Right>
            <FontAwesome name="angle-right" size={25} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#44b909", top: 4 }}>
              <FontAwesome name="cog" size={25} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Ajuda e suporte</Text>
          </Body>
          <Right>
            <FontAwesome name="angle-right" size={25} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button onPress={()=> this.signOut()} style={{ backgroundColor: "#007AFF", top: 4 }}>
              <FontAwesome name="sign-out" size={20} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Sair</Text>
          </Body>
          <Right>
            <FontAwesome name="angle-right" size={25} />
          </Right>
        </ListItem>
      </Content>
    </Container>
    );
  }
}
export default withNavigation(SideBar);
