import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

export default class SideBar extends Component {
  render() {
    return (
    <Container>
      <Header />
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FF9501", top: 4 }}>
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
            <Button style={{ backgroundColor: "#007AFF", top: 4 }}>
              <FontAwesome name="sign-out" size={20} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Text>Sair</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
    );
  }
}
