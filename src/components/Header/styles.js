import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 30 + getStatusBarHeight(),
    paddingTop: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    position: "absolute",
    top: -10,
    paddingLeft: 60,

  },
  signOut: {
    position: "relative",
    flexDirection: "row",
    top: 0,
  }
});

export default styles;
