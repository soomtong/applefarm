# 리액트 네이티브 템플릿

리액트 네이티브 개발 연습을 위한 템플릿입니다. 이 코드는 제3회 대한민국 SW융합 해카톤 기간에 제작되었습니다.

- React Native 0.32

를 기준으로 

- SQLite 
- Vector Icon
- Swipeable Views

가 사용되었습니다.

## 리액트 네이티브 튜토리얼

### 준비

1. brew 및 node 관련 툴 설치
2. react-native-cli 설치
3. react-native init 실행 후 폴더 이동동
4. react-native start 실행


#### 디폴트 프로젝트 생성

정상 설치 후 디폴트 프로젝트 생성 완료되면 다른 작업하기 전 각 플랫폼에 맞는 폴더 안으로 들어가 해당 네이티브 프로젝트를 빌드한다.
0.32 버전 현재 공식 페이지의 가이드 대신 이 방법을 따르는 것이 효율적이다.
정상적으로 빌드를 마친 후 해당 네이티브 플랫폼의 애뮬레이터를 띄우고 네이티브 앱이 정상적으로 에뮬레이터 에 로딩 된 것을 확인한다.
엑스코드의 경우 자동으로 콘솔 띄워 패키저를 실행시킨다.
안드로이드 스투디오의 경우는 수동으로 콘솔에서 패키저를 실행시켜야 한다.

#### 패키저 실행

패키저는 자바스크립트 코드를 에뮬레이터와 연결해준다. 각 플랫폼에 따라 그리고 리액트 네이티브 버전에 따라 패키저 실행은 구분된다. 혹시라도 기대한 화면이 실행되지 않고 에뮬레이터가 특정 포트에 대기상태라는 표시가 뜬다면 다음과 같이 패키저를 실행한 후 에뮬레이터에서 앱을 구동해준다. (각 플랫폼의 IDE 에서 재실행 해 준다.)

    $ project directory react-native start

실행된 화면은 다음과 같다. (0.32 기준)

    soomtong@lunaticite ~/R/appleFarm> react-native start
    Scanning 581 folders for symlinks in /Users/soomtong/Repository/appleFarm/node_modules (6ms)
     ┌────────────────────────────────────────────────────────────────────────────┐
     │  Running packager on port 8081.                                            │
     │                                                                            │
     │  Keep this packager running while developing on any JS projects. Feel      │
     │  free to close this tab and run your own packager instance if you          │
     │  prefer.                                                                   │
     │                                                                            │
     │  https://github.com/facebook/react-native                                  │
     │                                                                            │
     └────────────────────────────────────────────────────────────────────────────┘
    Looking for JS files in
       /Users/soomtong/Repository/appleFarm
    
    [21:22:18] <START> Building Dependency Graph
    [21:22:18] <START> Crawling File System
    [Hot Module Replacement] Server listening on /hot
    
    React packager ready.
    
    [21:22:18] <END>   Crawling File System (316ms)
    [21:22:18] <START> Building in-memory fs for JavaScript
    [21:22:19] <END>   Building in-memory fs for JavaScript (161ms)
    [21:22:19] <START> Building in-memory fs for Assets

#### 파일명 규칙

기본적으로 같은 파일명의 확장자에 따라 아이폰과 안드로이드 플랫폼을 위한 파일로 구분된다.

    app.ios.js
    app.android.js

#### 애플리케이션 디렉토리 구조

기본적으로 ios, android 폴더와 node_modules 폴더를 제외하고 사용자의 취향에 따라 폴더를 생성해 파일을 관리할 수 있다. 내 경우는 다음과 같다.

    /android
    /app
        main.android.js
        main.ios.js
        /components
            some components here
        /resource
            images or any stuffs
    /ios
    /node_modules
    index.android.js
    index.ios.js


### 서드파티 라이브러리 추가

현재 버전의 리액트 네이티브 콘솔 명령어에는 기존의 rnpm 기능이 머지되어 있는 상태다. 따라서 `npm i -S package-name` 기능을 통해 서드파티 라이브러리를 추가한 뒤 `react-native link` 를 통해 각 플랫폼 별 라이브러리를 등록할 수 있다.
하지만 가끔 빌드 관련 이슈로 한 방에 리-컴파일이 되지 않는 경우도 있으니 리액트 네이티브 공식 페이지의 문서를 참조하도록 한다.

#### 아이폰

다시 한 번 말하지만 Cocoapods 를 사용하지 않아도 된다. 또는 각 서드파티 메뉴얼에서 제공하는 수동 설정 방법을 사용하지 않아도 된다.
다음 스크린샷을 참고하여 각 라이브러리의 컴파일된 파일(타겟 파일)을 정확히 링크되도록 한다. 벡터 아이콘을 사용하기위해 `react-native-vector-icons` 를 임베딩하는 과정이다.

https://d2mxuefqeaa7sj.cloudfront.net/s_CF2FC2E853C1C0D85E307FA9500BFD548CD8793BDA19E00433E508882BBD73A5_1472839804375_file.png


기억할 것은 네이티브 애플리케이션이 정상적으로 빌드되어야 한다는 점이다. 엑스코드에서 경고하는 메시지를 참고해 해결하도록 하자.

#### 안드로이드

(Work in progress)

### 주요 컴포넌트 사용시 주의점

#### 스크린 사이즈 별 대응

Demensions 컴포넌트를 통해 현재 애플리케이션의 구동 환경 정보를 얻을 수 있다.


    import {
      Dimensions,
      StyleSheet,
    } from 'react-native';
    
    const {height, width} = Dimensions.get('window');

#### 스크롤 뷰 (또는 리스트 뷰)

현재 버전의 스크롤 뷰에는 디폴트로 `paddingVertical` 이 20 으로 지정되어 있다. 스크롤 바운스를 위한 마진이 필요하기 때문에 기본적으로 세팅되어 있는 듯 하다.
해당 값을 조절하는 콜백  `contentContainerStyle` 에 선언되어 있다.
해당 페이지의 내용을 참고하자.

    const styles = StyleSheet.create({ contentContainer: { paddingVertical: 20 } });
    <ScrollView contentContainerStyle={styles.contentContainer}></ScrollView>


## 리소스

- [React Native](https://facebook.github.io/react-native/)
- [React Native Express](http://www.reactnativeexpress.com/)
- [SQLite bind React Native](https://github.com/andpor/react-native-sqlite-storage)
- [Vector Icons for React Native](https://github.com/oblador/react-native-vector-icons)
- [Swipeable Views](https://github.com/oliviertassinari/react-swipeable-views)
- [SQLite for Cordova](https://github.com/litehelpers/Cordova-sqlite-storage#sample)



