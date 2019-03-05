import React from 'react';
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
      <FooterTab>
        <Button badge vertical>
          <FontAwesome name="home" size={30} color="#fff" />
        </Button>
        <Button badge center style={{ size: 10 }}>
          <FontAwesome name="plus-square" size={25} color="#fff"  />
        </Button>
        <Button badge>
          <FontAwesome  name="envelope" size={30} color="#fff"/>
        </Button>
      </FooterTab>
    </Footer>
  );

  export default footer;
