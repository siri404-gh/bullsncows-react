import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './app.less';
import bulls from './bulls.png';
import cows from './cows.png';
import Login from '../login/login';
import { Loader } from '../presentational/Loader/Loader';
import { toggleLogin } from '../../../actions/login/loginActions';
import { toggleLoading } from '../../../actions/loading/loadingActions';
import { saveUser } from '../../../actions/user/userActions';
import { getDetails } from '../../../actions/details/detailsActions';

class App extends Component {
  render() {
    const { login, loading, toggleLogin, toggleLoading, saveUser, getDetails } = this.props;
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
            getDetails={getDetails} />}
          {login && !loading && <Board loading={loading} />}
          {loading && <Loader />}
        </div>
        <div className='col-md-2 col-lg-3'>
        </div>
      </div>
    );
  }
};

const Board = () => (
  <div>
    <img className={Styles.headerImg} src={bulls} />
    <img className={Styles.headerImg} src={cows} />
    <TotalPoints />
    <AddWord />
    <WordList />
    <Rules />
  </div>
);

const Rules = () => (
  <div className={Styles.rules + ' col-xs-12'}>
    <div className='col-sm-1'>
    </div>
    <div className='col-sm-10'>
      <h6> How to play: </h6>
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
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleLogin()),
  toggleLoading: loading => dispatch(toggleLoading(loading)),
  saveUser: data => dispatch(saveUser(data)),
  getDetails: userId => dispatch(getDetails(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
