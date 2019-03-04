import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge,
  } from 'native-base';

  const footer = () => (
    <Footer>
      <FooterTab androidStatusBarColor="#573ea8" style={styles.header}>
        <Button vertical>
          <FontAwesome name="home" size={30} color="#fff" />
        </Button>
        <Button center style={{ size: 10 }}>
          <FontAwesome name="plus-square" size={25} color="#fff"  />
        </Button>
        <Button vertical>
          <FontAwesome name="user" size={30} color="#fff"  />
        </Button>
      </FooterTab>
    </Footer>
  );

  export default footer;

  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#4c23c7",
    },
  });
