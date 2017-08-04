import React from 'react';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './App.less';
import icon from './icon.png';

export const App = () => (
  <div className={Styles.mainBox + ' col-xs-12 col-sm-12 col-md-8 col-lg-4'}>
    <img className={Styles.headerImg} src={icon}/>
    <TotalPoints />
    <AddWord />
    <WordList />
    <h6> Remember: </h6>
    <ul>
      <li>Guess the 4 letter word. All letters are different.</li>
      <li>Right letter, wrong place is a "cow." Right letter, right place is a "bull."</li>
    </ul>
  </div>
);
