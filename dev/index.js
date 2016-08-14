import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./config/routes";
import css from './styles/style.styl';

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

const app = document.getElementById('app');

ReactDOM.render(routes, app);
