import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './components/App'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
