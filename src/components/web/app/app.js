import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './app.less';
import bulls from './../../../../images/bulls.png';
import cows from '../../../../images/cows.png';
import Login from '../login/login';
import { Loader } from '../presentational/Loader/Loader';
import { toggleLogin } from '../../../actions/login/loginActions';
import { toggleLoading } from '../../../actions/loading/loadingActions';
import { saveUser } from '../../../actions/user/userActions';
import { getDetails } from '../../../actions/details/detailsActions';
import { getUsers } from '../../../actions/users/usersActions';

class App extends Component {
  render() {
    const { login, loading, toggleLogin, toggleLoading, saveUser, getDetails, users, getUsers, uid } = this.props;
    return (
      <div>
        <div className='col-md-2 col-lg-3'>
        </div>
        <div className={Styles.mainBox + ' col-xs-12 col-sm-12 col-md-8 col-lg-6 ' + Styles.center}>
          {!login && <Login
            loading={loading}
            toggleLogin={toggleLogin}
            toggleLoading={toggleLoading}
            saveUser={saveUser}
            getDetails={getDetails}
            getUsers={getUsers} />}
          {login && !loading && <Board users={users} uid={uid} />}
          {loading && <Loader />}
        </div>
        <div className='col-md-2 col-lg-3'>
        </div>
      </div>
    );
  }
};

const Board = ({ users, uid }) => (
  <div>
    <div>
      <div className='col-xs-12'>
        <div className={Styles.rowPadding}>
          <img className={Styles.headerImg} src={bulls} />
          <img className={Styles.headerImg} src={cows} />
        </div>
        <div className={Styles.rowPadding}>
          <TotalPoints />
        </div>
        <AddWord />
      </div>
    </div>
        <div className={Styles.clearFix}></div>
    <div>
      <div className={'col-sm-6 ' + Styles.borderTop}>
        <WordList />
        <div className={Styles.clearFix}></div>
      </div>
      <div className={'col-sm-6 ' + Styles.borderTop}>
        <LeaderBoard users={users} uid={uid} />
      </div>
    </div>
    <Rules />
    {/* Love this game? <a href='https://www.facebook.com/dialog/share?app_id=111074542870113&display=popup&quote=I%20scored%20100%20points&href=https%3A%2F%2Fbullsncows-firebase.herokuapp.com&redirect_uri=https://bullsncows-firebase.herokuapp.com/'>Share it</a> ! */}
  </div >
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
            <div className='col-xs-8'>
              <span className={bold ? Styles.bold : Styles.normal}>{user.displayName.substr(0, 25)}</span>
            </div>
            <div className='col-xs-1'> {user.points} </div>
            <div className={Styles.clearFix}></div>
          </div>
        )
      }
      )}
    </div>
  )
};

const Rules = () => (
  <div className={Styles.borderTop + ' col-xs-12'}>
    <div className='col-sm-1'>
    </div>
    <div className='col-sm-10'>
      <h6 className={Styles.bold}> How to play: </h6>
      Guess the 4 letter word. All letters are different.<br />
      Right letter, wrong place is a "cow." Right letter, right place is a "bull."
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
    uid: state.user.uid
  };
};

const mapDispatchToProps = (dispatch) => ({
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
