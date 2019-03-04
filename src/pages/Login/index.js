import React, { Component } from 'react';

import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  state = {
    ursername: '',
    loading: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@ReactStart:username');

    this.setState({ loading: true });

    if(username) {
        this.props.navigation.navigate('Home');
    }

    this.setState({ loading: false });
  }

  handleInputChange = (ursername) => {
    this.setState({ ursername });
  };

  handleLogin = async () => {
    const { ursername } = this.state;


    if(!ursername.length) return;

    await AsyncStorage.setItem('@ReactStart:username', ursername);

    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
        <View>
          <Icon name="sign-in" size={64} color="#535684" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={this.state.ursername}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleLogin}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
          { this.state.loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Entrar</Text> }
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },

    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },

    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
    },

    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#535684",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },

    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
