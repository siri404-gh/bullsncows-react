import React from 'react';
import { connect } from 'react-redux';
import Styles from './TotalPoints.css';

const TotalPoints = ({points}) => {
  return (
    <div className={Styles.totalPoints}>
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
