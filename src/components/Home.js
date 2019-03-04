import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Button,
    Icon,
    Right,
} from 'native-base';

export default class Home extends Component {
    state = {
        blogList: [
            { id: 1, title: 'Implementando Shimmer Effect no React Native', author: 'Claudio Orlandi', author_avatar: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/content/images/2018/12/react-native-mapbox.png', likes: 1290, comments: 129, time: '21 de Junho' },
            { id: 2, title: 'Utilizando mapas no React Native com Mapbox',  author: 'Higo Ribeiro',    author_avatar: 'https://secure.gravatar.com/avatar/8834a7ccea235ca4cca9c970d95e27f3?s=500&d=mm&r=g', cover_image_url: 'https://i.ytimg.com/vi/zjYYpo_n3iE/maxresdefault.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
        ],
    }

    render() {
      return (
        <Content>
          {this.state.blogList.map(blog => (
          <Card key={blog.id}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: blog.author_avatar}} />
                <Body>
                  <Text>{blog.title}</Text>
                  <Text note>{blog.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: blog.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{blog.likes}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{blog.comments}</Text>
                </Button>
              </Body>
              <Right>
                <Text note>{blog.time}</Text>
              </Right>
            </CardItem>
          </Card>))}
        </Content>
        );
    }
}
