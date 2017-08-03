import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const TotalPoints = ({points}) => {
  return (
    <Text> Total Points : {points}</Text>
  )
};

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

const mapDispatchToProps = () => {
  return {};
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPoints);
