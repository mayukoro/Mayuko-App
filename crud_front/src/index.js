import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import Profile from './Profile';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router history={browserHistory}>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/signup" component={SignUp} />
     <Route path="/users/:id" component={Profile} />
    </Switch>
</Router>
,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
