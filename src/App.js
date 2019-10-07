import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const App = ({ someVar, fight }) => (
  <>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <h2>{someVar}</h2>
      {fight ? `${someVar} lolisty lol i lalka ${someVar}` : { someVar }}
    </header>
  </>
);

App.defaultProps = {
  someVar: 'PropType and DefultType test',
};
App.propTypes = {
  someVar: PropTypes.string,
  fight: PropTypes.string.isRequired,
};

export default App;
