import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../../../actions/words/wordsActions';
import { View, TextInput, Button } from 'react-native';

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 20 }} >
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 0, marginBottom: 10 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} maxLength={4} autoFocus />
        <Button
          onPress={() => {
            this.props.dispatch(addWord(this.state.text));
            this.setState({ text: '' });
          }}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit"
        />
      </View>)
  }
};

export default connect()(AddWord);
