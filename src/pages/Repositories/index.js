import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Button,
    Container,
} from 'native-base';

import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../../components/Header';

class Repositories extends Component {

  static navigationOptions = {
    Title: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='home' size={20} style={{color: tintColor}}
    />
  )};

  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <Container>
        <Header name='Repositories'/>
        <ScrollView>
          {repositories.data.map(repository => (
          <Card style={{ marginLeft: 10, marginRight: 10 }} key={repository.id}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: repository.owner.avatar_url}} />
                <Body>
                  <Text>{repository.name}</Text>
                  <Text note>{repository.full_name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body style={{ justifyContent: 'flex-end', paddingLeft: 10}}>
                <Text note>Descrição: {repository.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="code-branch" />
                  <Text note>{repository.forks}</Text>
                </Button>
                  <Text style={{ right: 30}} note>forks</Text>
              </Left>
              <Left>
                <Button transparent>
                  <Icon active name="eye"></Icon>
                  <Text note>{repository.watchers_count}</Text>
                </Button>
                  <Text style={{ right: 30}} note>watchers</Text>
              </Left>
            </CardItem>
          </Card>))}
          </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  username: state.login.username,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
