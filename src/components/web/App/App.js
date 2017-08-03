import React from 'react';
import AddWord from '../containers/AddWord/AddWord';
import WordList from '../containers/WordList/WordList';
import TotalPoints from '../containers/TotalPoints/TotalPoints';
// import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './App.css';

export const App = () => (
  <div className='main'>
    <AddWord />
    <WordList />
    <TotalPoints />
    <li>Bulls and Cows is an old code-breaking mind or paper and pencil game for two or more players, predating the similar commercially marketed board game Mastermind.</li>
    <li>It is a game with numbers or words that may date back a century or more. It is played by two opponents.</li>
    <li>The goal is to be the first player to successfully decode your opponent's secret number or word. Each player secretly writes a four-digit number or four-letter word. The digits or letters must all be different.</li>
    <li>Players take turns trying to guess their opponent's number/word. The opponent tells them the number of matches.</li>
    <li>Right number, wrong place is a "cow." Right number, right place is a "bull."</li>
    <li>If the person who took the first turn is also the first to decode the secret number or word, the other person gets one more turn to see if they can tie.</li>
  </div>
);
