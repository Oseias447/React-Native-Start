import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
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
} from 'native-base';
import styles from './styles';

class HeaderNavigation extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');

  }

  render() {
    const { navigation } = this.props;
    const { onPress } = this.props;

    return(
      <Header style={styles.container}>
        <Left>
          <Button transparent onPress={onPress} >
            <Icon name='menu' style={{color: "#FFF"}} />
          </Button>
        </Left>
          <Button transparent onPress={()=> {}} style={{left: 30}}>
            <FontAwesome name='home' size={24} style={{color: "#FFF"}} />
          </Button>
          <Button transparent onPress={()=> navigation.navigate('Messages')} style={{left: 65}}>
            <FontAwesome name='envelope-o' size={24} style={{color: "#FFF"}} />
          </Button>
          <Button badge transparent onPress={()=> navigation.navigate('Notification')} style={{left: 95}}>
            <FontAwesome name='bell-o' size={24} style={{color: "#FFF"}} /><Badge><Text style={{fontSize: 12}}>3</Text></Badge>
          </Button>
        <Right />
        <View>
          <Left style={styles.signOut}>
            <Button transparent onPress={()=> this.signOut()}>
              <FontAwesome name='exchange' size={15} style={{color: "#FFF"}} />
            </Button>
          </Left>
        </View>
      </Header>
    )
  }
}

export default withNavigation(HeaderNavigation);
