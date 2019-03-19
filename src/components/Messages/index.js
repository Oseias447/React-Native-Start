import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
    Content,
    Left,
    Thumbnail,
    Body,
    List,
    ListItem,
    Container,
    Fab,
} from 'native-base';
import { Text, View } from 'react-native';
import styles from './styles';

import Header from '../Header'
import Icon  from 'react-native-vector-icons/FontAwesome';
class Messages extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
       <Icon name='envelope' size={20} style={{color: tintColor}} />
    ),
    headerRight: <Icon name='exit' style={{paddingRight: 10}} />
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
      messages: [
          { id: 1, name: 'Diego Fernandes', avatar_url: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4', last_message: 'Lorem ipsum', time: '18:20 PM' },
          { id: 2,name: 'Claudio Orlandi', avatar_url: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', last_message: 'Lorem ipsum', time: '10:12 AM' },
          { id: 3,name: 'Oseias Silva',   avatar_url: 'https://avatars0.githubusercontent.com/u/35711742?s=460&v=4', last_message: 'Lorem ipsum', time: '11:27 AM' },
      ],
  }

    render() {

    return(
      <Container>
        <Header name='Messages'/>
          <Content>
            <List>
              {this.state.messages.map( message => (
                <ListItem avatar key={message.id}>
                  <Left>
                    <Thumbnail source={{ uri: message.avatar_url}} />
                  </Left>
                  <Body>
                    <Text>{message.name}</Text>
                    <Text note>{message.last_message}</Text>
                    <Text note>{message.time}</Text>
                  </Body>
                </ListItem>
              ))}
            </List>
          </Content>
            <Fab
              direction="up"
              position="bottomRight"
              style={{ backgroundColor: "#AAA"}}
            >
            <Icon type="FontAwesome" name="comment" />
            </Fab>
      </Container>
    );
  }
}

export default withNavigation(Messages);

