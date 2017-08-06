import React from 'react';
import { connect } from 'react-redux';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './app.less';
import bulls from './bulls.png';
import cows from './cows.png';
import Login from '../login/login';
import { toggleLogin } from '../../../actions/login/loginActions';
import { toggleLoading } from '../../../actions/loading/loadingActions';
import { saveUser } from '../../../actions/user/userActions';

const Board = () => (
  <div>
    <TotalPoints />
    <AddWord />
    <WordList />
    <div className='col-xs-12'>
      <div className='col-sm-1'>
      </div>
      <div className='col-sm-10'>
    <h6> Remember: </h6>
    <ul>
      <li>Guess the 4 letter word. All letters are different.</li>
      <li>Right letter, wrong place is a "cow." Right letter, right place is a "bull."</li>
    </ul>
    </div>
    <div className='col-sm-1'>
      </div>
    </div>
  </div>
);

const App = ({ login, loading, toggleLogin, toggleLoading, saveUser }) => (
  <div>
    <div className='col-md-2 col-lg-3'>
    </div>
    <div className={Styles.mainBox + ' col-xs-12 col-sm-12 col-md-8 col-lg-6'}>
      <div className={Styles.center}>
        <img className={Styles.headerImg} src={bulls} />
        <img className={Styles.headerImg} src={cows} />
      </div>
      {!login && <Login loading={loading} toggleLogin={toggleLogin} toggleLoading={toggleLoading} saveUser={saveUser} />}
      {login && <Board />}
    </div>
    <div className='col-md-2 col-lg-3'>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    login: state.login,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleLogin()),
  toggleLoading: () => dispatch(toggleLoading()),
  saveUser: (data) => dispatch(saveUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
