import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Footer,
  FooterTab,
  Button,
} from 'native-base';

  const footer = ({ navigation }) => (
    <Footer>
      <FooterTab>
        <Button vertical
        onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={30} color="#fff" />
        </Button>
        <Button center style={{ size: 10 }}>
          <FontAwesome name="plus-square" size={25} color="#fff"  />
        </Button>
        <Button vertical
        onPress={() => navigation.navigate('Messages')}
        >
          <FontAwesome name="envelope" size={30} color="#fff"  />
        </Button>
      </FooterTab>
    </Footer>
  );

  export default withNavigation(footer);

  footer.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }
