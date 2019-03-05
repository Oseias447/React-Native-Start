import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Icon,
  View,
  Fab,
  Thumbnail,
  Text,
  Badge,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';

import Footer from '../components/Footer';
import Home from '../components/Home';
import Messages from '../components/Messages';
import Notification from '../components/Notification';

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

const MainTab = () => (
    <Container>
    <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
      <Left>
        <Thumbnail small source={{ uri: logo_url }} />
      </Left>
      <Body>
        <Title>Rocketseat</Title>
      </Body>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
        <Home />
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /><Badge><Text>1</Text></Badge></TabHeading>}>
        <Notification />
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /><Badge><Text>3</Text></Badge></TabHeading>}>
        <Messages />
        <Fab
          direction="up"
          position="bottomRight"
          style={{ backgroundColor: "#7159C1"}}
        >
          <Icon type="FontAwesome" name="comment" />
        </Fab>
      </Tab>
    </Tabs>
    </View>
    <Footer />
  </Container>
);

export default MainTab;

const styles = StyleSheet.create({
    tabHeading: {
      backgroundColor: "#7159C8",
    },
    header: {
      backgroundColor: "#7159C1",
    },
    container: {
      flex: 1,
    },
  });
