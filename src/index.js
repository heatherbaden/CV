// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import cv from './cv.json';

ReactDOM.render(<App cv={cv} />, document.getElementById('root'));
