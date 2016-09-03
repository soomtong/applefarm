/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!{'\n'}
          {this.props['count']}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      selectedTab: 'homeTab',
      notifyCount: 0,
      presses: 0,
    };
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="homeTab"
                        icon={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                        selected={this.state.selectedTab === 'homeTab'}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'homeTab',
                            notifyCount: this.state.notifyCount + 1
                          });
                        }}>
          <HomePage count={this.state.notifyCount}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="appleTab"
                        systemIcon="history"
                        selected={this.state.selectedTab === 'appleTab'}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'appleTab',
                            notifyCount: this.state.notifyCount + 1
                          });
                        }}>
          <HomePage count={this.state.notifyCount}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default App;