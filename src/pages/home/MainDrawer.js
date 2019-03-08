import React, { Component } from 'react';
import { Container, Drawer } from 'native-base';
import PropTypes from 'prop-types';

import Home from '../../components/Home';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

 export default class MainDrawer extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  closeDrawer() {
    this.drawer._root.close()
  }

  openDrawer() {
    this.drawer._root.open()
  }

  render() {
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >
      <Container>
          <Header onPress={()=> this.openDrawer()}/>
          <Home />
          <Footer />
      </Container>
      </Drawer>
    );
  }
}

MainDrawer.PropTypes = {

}
