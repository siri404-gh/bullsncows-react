import React from 'react';
import { connect } from 'react-redux';
import Styles from './TotalPoints.less';

const LastWord = ({ word }) => {
  return (
    <span>
      , <b> Last Word</b>: {word}
    </span>
  );
};

const TotalPoints = ({ user, points, attempts, guesses, lastword }) => {
  return (
    <div className={Styles.totalPoints}>
      Hello {user},
      <b> Points</b> : {points},
      <b> Words</b>: {attempts},
      <b> Guesses</b>: {guesses}
      {lastword.length > 0 && <LastWord word={lastword[lastword.length - 1]} />},
      <b> Average</b>: {points/attempts || 0}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user.displayName,
    points: state.points,
    attempts: state.lastword.length,
    guesses: state.words.length,
    lastword: state.lastword
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPoints);
