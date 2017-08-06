import React from 'react';
import { connect } from 'react-redux';
import Styles from './TotalPoints.less';

const TotalPoints = ({user, points, attempts, guesses}) => {
  return (
    <div className={Styles.totalPoints}>
      Hello {user},
      <b> Points</b> : {points},
      <b> Words</b>: {attempts},
      <b> Guesses</b>: {guesses}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user.displayName,
    points: state.points,
    attempts: state.attempts,
    guesses: state.words.length
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPoints);
