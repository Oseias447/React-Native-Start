import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Login extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }),
  }

  state = { username: '' };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@ReactStart:username', username);
 }

  signIn = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
    await this.saveUser(username);
  }

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View>
            <Icon name="github" size={64} color="#535684" />
            <Text>Git Hub</Text>
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

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
