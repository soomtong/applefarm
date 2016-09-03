import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  debug: {
    borderColor: 'red',
    borderWidth: 0.5,
  },
  wrap: {
    // flex: 0,
    paddingTop: 0,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  segment: {
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4
  },
  container: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
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
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    // paddingVertical: 5,
    paddingTop: 5,
    paddingBottom: 3,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  slideContainer: {
  },
  slide: {
    padding: 0,
    height: (width * 2) / 3.5,
    backgroundColor: '#e9eaed'
  },
  slideImage: {
    width: width,
    height: (width * 2) / 3.5,
    resizeMode: 'cover',
  },
  textShadow: {
    fontWeight: 'bold',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#303030',
  },
  nestedText: {
    marginLeft: 14,
    marginTop: 16,
    backgroundColor: 'transparent',
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#fefefe',
  },
  column: {
    flexDirection: 'column',
    flex: 1
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
  textOnly: {
    paddingLeft: 2,
  },
  subText: {
    flex: 1,
    paddingTop: 2,
    textAlign: 'justify',
    color: 'gray',
    fontSize: 13
  }
});

export default styles;