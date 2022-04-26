import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SpeechProvider} from '@speechly/react-client';
import './index.css';
import {Provider} from './context/context';

ReactDOM.render(
  <SpeechProvider appId="a6e8554b-89e4-4c44-b13c-298ea109171f" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
