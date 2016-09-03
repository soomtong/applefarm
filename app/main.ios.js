/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  ScrollView,
  SegmentedControlIOS,
  TabBarIOS,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Image,
  Text,
  View
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

import mainStyles from './resource/mainStyle';

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props['value'],
      position: 0,
    };
    this.db = SQLite.openDatabase({name: "database.db", readOnly: true, createFromLocation: 1}, () => {
      console.log('database opened');
    }, (err) => {
      console.log(err)
    });
  }

  componentWillMount() {
    this.db.executeSql('SELECT * FROM category WHERE id = ?', [1], function(rs) {
      console.log('Result Records: ' + rs.rows.length);
    }, function(error) {
      console.log('SELECT SQL statement ERROR: ' + error.message);
    });
  }

  render() {
    return (
      <View style={[mainStyles.container]}>
        <SwipeableViews index={this.state.position}
                        onChangeIndex={(index) => {
                          this.setState({
                            position: index
                          });
                        }}
                        style={mainStyles.slideContainer}>
          <View style={[mainStyles.slide]}>
            <TouchableOpacity onPress={()=>{console.log('touch', this.state.position)}}>
              <Image source={{uri: 'https://placeimg.com/320/240/1'}}
                     style={mainStyles.slideImage}>
                <Text style={[mainStyles.nestedText, mainStyles.textShadow]}>
                  slide n°1
                </Text>
              </Image>
            </TouchableOpacity>
          </View>
          <View style={mainStyles.slide}>
            <TouchableOpacity onPress={()=>{console.log('touch', this.state.position)}}>
            <Image source={{uri: 'https://placeimg.com/320/240/2'}}
                   style={mainStyles.slideImage}>
              <Text style={[mainStyles.nestedText, mainStyles.textShadow]}>
                slide n°2
              </Text>
            </Image>
            </TouchableOpacity>
          </View>
          <View style={mainStyles.slide}>
            <TouchableOpacity onPress={()=>{console.log('touch', this.state.position)}}>
            <Image source={{uri: 'https://placeimg.com/320/240/3'}}
                   style={mainStyles.slideImage}>
              <Text style={[mainStyles.nestedText, mainStyles.textShadow]}>
                slide n°3
              </Text>
            </Image>
            </TouchableOpacity>
          </View>
        </SwipeableViews>
      </View>
    );
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
    }
  }

  render() {
    return (
      <View style={[mainStyles.wrap]}>

        <HomeSlider data={""}/>

        <View>

          <View style={[mainStyles.titleContainer]}>
            <Text style={mainStyles.titleText}>
              {"하드웨어"}
            </Text>
          </View>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <Image style={mainStyles.thumb} source={{uri: "https://placeimg.com/64/64/1"}}/>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text]}>
                    {'아이폰 6s'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={3}
                        style={[mainStyles.text, mainStyles.subText]}>
                    {'처음 사용하는 순간부터 새롭다는 느낌을 받게 될 것입니다. 단순히 누르는 것만으로 그 어느 때보다 많은 일을 할 수 있게 해주는 3D Touch'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={{height: 1, backgroundColor: '#CCCCCC',}}/>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <Image style={mainStyles.thumb} source={{uri: "https://placeimg.com/64/64/1"}}/>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text]}>
                    {'맥북 프로'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={3}
                        style={[mainStyles.text, mainStyles.subText]}>
                    {'혁신적인 Retina 디스플레이. 새로운 압력감지 트랙패드. flash로만 구성된 아키텍처. 파워풀한 듀얼 코어 및 쿼드 코어 Intel 프로세서. 이 모든 것이 모여 새로운 차원의 성능을 발휘하는 노트북이 완성됩니다.'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={mainStyles.titleContainer}>
            <Text style={mainStyles.titleText}>
              {"소프트웨어"}
            </Text>
          </View>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <Image style={mainStyles.thumb} source={{uri: "https://placeimg.com/64/64/1"}}/>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text]}>
                    {'애플 와치'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={3}
                        style={[mainStyles.text, mainStyles.subText]}>
                    {'또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다. 다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={{height: 1, backgroundColor: '#CCCCCC',}}/>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <Image style={mainStyles.thumb} source={{uri: "https://placeimg.com/64/64/1"}}/>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text]}>
                    {'애플 와치'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={3}
                        style={[mainStyles.text, mainStyles.subText]}>
                    {'또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다. 다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={mainStyles.titleContainer}>
            <Text style={mainStyles.titleText}>
              {"애플 스토리"}
            </Text>
          </View>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text, mainStyles.textOnly]}>
                    {'애플 와치'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={2}
                        style={[mainStyles.text, mainStyles.subText, mainStyles.textOnly]}>
                    {'또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다. 다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={{height: 1, backgroundColor: '#CCCCCC',}}/>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text, mainStyles.textOnly]}>
                    {'애플 와치'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={2}
                        style={[mainStyles.text, mainStyles.subText, mainStyles.textOnly]}>
                    {'또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다. 다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

          <View style={{height: 1, backgroundColor: '#CCCCCC',}}/>

          <TouchableHighlight onPress={() => console.log('pressed')}>
            <View style={mainStyles.container}>
              <View style={mainStyles.row}>
                <View style={mainStyles.column}>
                  <Text style={[mainStyles.text, mainStyles.textOnly]}>
                    {'애플 와치'}
                  </Text>
                  <Text ellipsizeMode={'tail'}
                        numberOfLines={2}
                        style={[mainStyles.text, mainStyles.subText, mainStyles.textOnly]}>
                    {'또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다. 다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 '}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}

class StoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['애플', '스티브 잡스', 'WWDC'],
      value: 'Not selected',
      selectedIndex: undefined
    };
  }

  render() {
    return (
      <View style={mainStyles.wrap}>
        <View style={mainStyles.segment}>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({
                selectedIndex: event.nativeEvent['selectedSegmentIndex']
              });
            }}
            onValueChange={(value) => {
              this.setState({
                value: value
              });
            }}/>
        </View>

        <View style={mainStyles.container}>
          <Text style={mainStyles.welcome}>
            Welcome to React Native!{'\n'}
            {this.state.selectedIndex}
          </Text>
          <Text style={mainStyles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

class HardwarePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['애플', '서드파티'],
      value: 'Not selected',
      selectedIndex: undefined
    };
  }

  render() {
    return (
      <View style={mainStyles.wrap}>
        <View style={mainStyles.segment}>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({
                selectedIndex: event.nativeEvent['selectedSegmentIndex']
              });
            }}
            onValueChange={(value) => {
              this.setState({
                value: value
              });
            }}/>
        </View>

        <View style={mainStyles.container}>
          <Text style={mainStyles.welcome}>
            Welcome to React Native!{'\n'}
            {this.state.selectedIndex}
          </Text>
          <Text style={mainStyles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

class SoftwarePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['애플', '서드파티'],
      value: 'Not selected',
      selectedIndex: undefined
    };
  }

  render() {
    return (
      <View style={mainStyles.wrap}>
        <View style={mainStyles.segment}>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({
                selectedIndex: event.nativeEvent['selectedSegmentIndex']
              });
            }}
            onValueChange={(value) => {
              this.setState({
                value: value
              });
            }}/>
        </View>

        <View style={mainStyles.container}>
          <Text style={mainStyles.welcome}>
            Welcome to React Native!{'\n'}
            {this.state.selectedIndex}
          </Text>
          <Text style={mainStyles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      notifyCount: 0,
      presses: 0,
    };
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS title="홈"
                            iconName="ios-home-outline"
                            selectedIconName="ios-home"
                            selected={this.state.selectedTab === 'homeTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'homeTab',
                                notifyCount: this.state.notifyCount + 1
                              });
                            }}>
          <ScrollView>
            <HomePage count={this.state.notifyCount}/>
          </ScrollView>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS title="스토리"
                            iconName="ios-book-outline"
                            selectedIconName="ios-book"
                            selected={this.state.selectedTab === 'appleTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'appleTab',
                                notifyCount: this.state.notifyCount + 1
                              });
                            }}>
          <ScrollView>
            <StoryPage count={this.state.notifyCount}/>
          </ScrollView>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS title="하드웨어"
                            iconName="ios-tablet-portrait-outline"
                            selectedIconName="ios-tablet-portrait"
                            selected={this.state.selectedTab === 'hardwareTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'hardwareTab',
                                notifyCount: this.state.notifyCount + 1
                              });
                            }}>
          <ScrollView>
            <HardwarePage count={this.state.notifyCount}/>
          </ScrollView>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS title="소프트웨어"
                            iconName="ios-pie-outline"
                            selectedIconName="ios-pie"
                            selected={this.state.selectedTab === 'softwareTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'softwareTab',
                                notifyCount: this.state.notifyCount + 1
                              });
                            }}>
          <ScrollView>
            <SoftwarePage count={this.state.notifyCount}/>
          </ScrollView>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

export default App;