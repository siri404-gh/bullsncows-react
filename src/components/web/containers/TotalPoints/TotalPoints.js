import React from 'react';
import { connect } from 'react-redux';
import Styles from './TotalPoints.less';

const TotalPoints = ({points, attempts}) => {
  return (
    <div className={Styles.totalPoints}>
      Points : {points}, Words: {attempts}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    points: state.points,
    attempts: state.attempts
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPoints);
