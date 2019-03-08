import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {
    Content,
    Left,
    Thumbnail,
    Body,
    Text,
    Icon,
    Right,
    List,
    ListItem,
    Container,
    Header,
    Button,
    View,
    Title,
} from 'native-base';
import styles from './styles';

export default class Notification extends Component {

    static propTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
      }).isRequired,
    }

    state = {
        notifications: [
            { id: 1, title: 'Pediu para participar do grupo', author: 'Oséias Silva', author_avatar: 'https://avatars0.githubusercontent.com/u/35711742?s=460&v=4', grupo: 'Preço Justo' ,time: 'Há 23 minutos' },
            { id: 2, title: 'Pediu para participar do grupo', author: 'Diego Fernandes', author_avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4', grupo: 'Facebrick Erechim',time: 'Há 4 horas' },
            { id: 3, title: 'Pediu para participar do grupo', author: 'Claudio Orlandi', author_avatar: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', grupo: 'Facebrick Erechim',time: 'Há 1 horas' }
        ],
    }

    render() {
      const { navigation } = this.props;

      return(
      <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=> navigation.navigate('Home')} >
                <FontAwesome name='chevron-left' size={20} style={{color: "#FFF"}} />
              </Button>
            </Left>
            <View style={styles.title}>
              <Title>Notifications</Title>
            </View>
            <Right />
          </Header>
          <Content>
            <List>
              {this.state.notifications.map( notification => (
              <ListItem avatar key={notification.id}>
                <Left>
                  <Thumbnail source={{ uri: notification.author_avatar}} />
                </Left>
                <Body>
                  <Text>{notification.author}</Text>
                  <Text note>{notification.title} {notification.grupo}</Text>
                  <Text note>{notification.time}</Text>
                </Body>
                <Right>
                  <Icon type="FontAwesome" name="ellipsis-h" />
                </Right>
              </ListItem>
              ))}
            </List>
          </Content>
      </Container>
      );
    }
}

