import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./config/routes";
import css from './styles/style.styl';

const app = document.getElementById('app');

ReactDOM.render(routes, app);
