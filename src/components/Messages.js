import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import {
    Content,
    Left,
    Thumbnail,
    Body,
    Text,
    List,
    ListItem,
    Header,
    Container,
    Button,
    Icon,
    View,
    Title,
    Right,
    Fab,
} from 'native-base';
import Footer from './Footer';

class Messages extends Component {
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
          <Header>
            <Left>
              <Button transparent onPress={()=> this.props.navigation.navigate('Home')} >
                <FontAwesome name='chevron-left' size={20} style={{color: "#FFF"}} />
              </Button>
            </Left>
            <View style={styles.title}>
              <Title>Messages</Title>
            </View>
            <Right />
          </Header>
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
            <View>
              <Fab
                direction="up"
                position="bottomRight"
                style={{ backgroundColor: "#AAA"}}
              >
                <Icon type="FontAwesome" name="comment" />
              </Fab>
            </View>
            <Footer />
        </Container>
      );
    }
}

export default withNavigation(Messages);

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: '#FFF',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 75,
  }
})
