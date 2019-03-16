import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import api from './../../services/api';

export default class Login extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    username: '',
    loading: false,
    error: false,
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@ReactStart:username', username);
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      navigation.navigate('Home');
    } catch (error) {

      this.setState({ loading: false, error: true });
    }

  }

  render() {
    const { username, loading, error } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View>
            <Icon name="sign-in" size={64} color="#535684" />
          </View>

          { error && <Text style={styles.error}>Usuário inexistente!</Text>}
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={username}
            onChangeText={text => this.setState({ username: text})}
            returnKeyType="send"
          />

          <TouchableOpacity onPress={this.signIn} style={styles.button}>
            { loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Entrar</Text> }
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

