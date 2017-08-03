import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import store from '../../../stores/mobileStore';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';

class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <Provider store={store}>
          <View>
            <AddWord />
          </View>
      </Provider>
    );
  }
}

export default App;
