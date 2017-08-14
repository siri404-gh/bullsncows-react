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

const rank = (users, uid) => {
  const sorted = users.sort((a, b) => b.points - a.points);
  return sorted.findIndex(user => user.user === uid) + 1;
};

const TotalPoints = ({ user, uid, points, attempts, guesses, lastword, users }) => {
  return (
    <div className="panel-group">
    <div className="panel panel-success">
      <div className="panel-heading">
      Hello {user},
      <b> Total Points</b> : {points},
      <b> Total Words</b>: {attempts},
      {/* <b> Guesses</b>: {guesses}
      {lastword.length > 0 && <LastWord word={lastword[lastword.length - 1]} />},
      <b> Average</b>: {points/attempts || 0} */}
      <b> Rank</b>: {rank(users, uid)}
      </div>
    </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user.displayName,
    uid: state.user.uid,
    points: state.points,
    attempts: state.lastword.length,
    guesses: state.words.length,
    lastword: state.lastword,
    users: state.users
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPoints);
