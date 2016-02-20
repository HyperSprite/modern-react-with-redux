import React from 'react';
import ReactDOM from 'react-dom';
// the api-keys file is outside of this repo,
// see api-keys-sample.js in the root for an example
import ApiKeys from '../../../../api-keys'

const API_KEY = ApiKeys.youtube;

const App = () => {
  return <div>Hi!</div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));
