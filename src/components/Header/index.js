import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Left,
  Icon,
  Button,
  Right,
  Badge,
  Text,
  Header,
  View,
  Body,
  Title
} from 'native-base';
import styles from './styles';

class HeaderNavigation extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  }

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');

  }

  render() {
    const { navigation } = this.props;

    return(
      <Header style={styles.container}>
        <Left>
          <TouchableOpacity transparent onPress={() => navigation.openDrawer()} >
            <Icon name='menu' style={{color: "#000"}} />
          </TouchableOpacity>
        </Left>
          <Text style={{ flexDirection: 'row', justifyContent: 'space-between'}}>{this.props.name}</Text>
        <Right />
        <View>
          <Left style={styles.signOut}>
            <Button transparent onPress={()=> this.signOut()}>
              <FontAwesome name='exchange' size={15} style={{color: "#000", paddingRight: 10}} />
            </Button>
          </Left>
        </View>
      </Header>
    )
  }
}

export default withNavigation(HeaderNavigation);
