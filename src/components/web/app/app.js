import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './app.less';
import bullsncows from './../../../../images/bullsncows.png';
import bulls from './../../../../images/bulls.png';
import cows from '../../../../images/cows.png';
import Login from '../login/login';
import { Loader } from '../presentational/Loader/Loader';
import { toggleLogin } from '../../../actions/login/loginActions';
import { toggleLoading } from '../../../actions/loading/loadingActions';
import { saveUser } from '../../../actions/user/userActions';
import { getDetails } from '../../../actions/details/detailsActions';
import { getUsers } from '../../../actions/users/usersActions';
import { gameUrl, numOfLetters, wordType } from '../../../../variables';
const letterType = wordType === 'number' ? 'digit' : 'letter';
class App extends Component {
  render() {
    const { login, loading, toggleLogin, toggleLoading, saveUser, getDetails, users, getUsers, uid, points, lastword, level } = this.props;
    return (
      <div className='container'>
        <div className='col-sm-1 col-md-2 col-lg-3'></div>
        <div className={Styles.app + ' col-xs-12 col-sm-10 col-md-8 col-lg-6 ' + Styles.center}>
          {!login && <Login
            loading={loading}
            toggleLogin={toggleLogin}
            toggleLoading={toggleLoading}
            saveUser={saveUser}
            getDetails={getDetails}
            getUsers={getUsers} />}
          {login && !loading && <Board users={users} uid={uid} points={points} lastword={lastword} level={level}/>}
          {loading && <Loader />}
        </div>
        <div className='col-sm-1 col-md-2 col-lg-3'></div>
      </div>
    );
  }
};

const Board = ({ users, uid, points, lastword, level }) => (
  <div>
    <div className='col-xs-12'>
      <div className={Styles.rowPadding}>
        <img className={Styles.headerImg} src={bulls} />
        <img className={Styles.headerImg} src={cows} />
      </div>
      <TotalPoints />
      <AddWord />
    </div>
    <div className={Styles.clearFix}></div>
    <div>
      <div className={Styles.borderTop + ' col-sm-12 ' +Styles.center + ' ' + Styles.centerHor}>
        <WordList />
        <div className={Styles.clearFix}></div>
      </div>
      {/* <div className={Styles.borderTop + ' col-sm-6'}>
        <LeaderBoard users={users} uid={uid} />
        <div className={Styles.clearFix}></div>
      </div> */}
    </div>
    <Rules level={level}/>
    <div className={Styles.clearFix}></div>
    Like this game? <a href={'https://www.facebook.com/dialog/share?app_id=111074542870113&display=popup&quote=Level:%20'+level+',%20Total%20'+wordType.charAt(0).toUpperCase()+wordType.slice(1)+'s:%20' + lastword.length + ',%20Total%20Points:%20' + points + '&&href='+encodeURIComponent(gameUrl)+'&redirect_uri='+encodeURIComponent(gameUrl)}>Share it</a> !
  </div>
);

const LeaderBoard = ({ users, uid }) => {
  users.sort((a, b) => b.points - a.points);
  return (
    <div className={Styles.leaderBoard + ' ' + Styles.borderLeft}>
      <div><h6 className={Styles.center + ' ' + Styles.bold}> LeaderBoard </h6></div>
      {users.map((user, i) => {
        let bold = false;
        if (user.user === uid) bold = true;
        return (
          <div key={i} className={Styles.borderBottom}>
            <div className='col-xs-1'> {i + 1} </div>
            <div className='col-xs-6'>
              <span className={bold ? Styles.bold : Styles.normal}>{user.displayName.split(' ').shift()}</span>
            </div>
            <div className='col-xs-4'> {user.points + ' ' + '(' + user.words.length + ')'} </div>
            <div className={Styles.clearFix}></div>
          </div>
        )
      })}
    </div>
  );
};

const Rules = ({ level }) => (
  <div className={Styles.borderTop + ' col-xs-12'}>
    <div className='col-sm-1'>
    </div>
    <div className={Styles.rules + ' col-sm-10'}>
      <h6 className={Styles.bold}> How to play: </h6>
      {'Goal is to find the '+ (level+2) + ' ' + letterType + ' ' + wordType + '. All '+ letterType + 's are different. Start with a random guess with unique '+letterType+'s. A bull indicates 1 '+ letterType +' in the guess present in the actual ' + wordType + ' and at the right place. A cow indicates 1 '+letterType +', but at the wrong place. Level increases every 500 points scored.'}
    </div>
    <div className='col-sm-1'>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    login: state.login,
    loading: state.loading,
    users: state.users,
    uid: state.user.uid,
    points: state.points,
    lastword: state.lastword,
    level: state.level
  };
};

const mapDispatchToProps = dispatch => ({
  toggleLogin: () => dispatch(toggleLogin()),
  toggleLoading: loading => dispatch(toggleLoading(loading)),
  saveUser: data => dispatch(saveUser(data)),
  getDetails: userId => dispatch(getDetails(userId)),
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
