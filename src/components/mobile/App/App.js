import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Provider } from "react-redux";
import store from '../../../stores/mobileStore';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={{backgroundColor: 'white', flex: 1}} >
          <Image
            source={{ uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }}
            style={{ width: 320, height: 180 }}
          />
          <AddWord />
          <WordList />
          <TotalPoints />
        </ScrollView>
      </Provider>
    );
  }
}

export default App;
