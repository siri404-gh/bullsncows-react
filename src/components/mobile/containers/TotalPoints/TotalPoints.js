import React from 'react';
import { connect } from 'react-redux';

const TotalPoints = ({points}) => {
  return (
    <div>
      Total Points : {points}
    </div>
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
