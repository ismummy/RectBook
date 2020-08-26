import React from 'react';
import './App.css';
import {Redirect, Route, Router, Switch} from "react-router-dom"
import {createBrowserHistory} from "history"
import JavascriptTimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import MainPage from "./layouts/MainPage";
import BookDetail from "./layouts/BookDetail";

function App() {
    JavascriptTimeAgo.locale(en)
    const hist = createBrowserHistory()
    return (
        <Router history={hist}>
            <Switch>
                <Route exact path="/books" component={MainPage}/>
                <Route path="/books/:id" component={BookDetail}/>
                <Redirect from="/" to="/books"/>
            </Switch>
        </Router>
    );
}

export default App;
