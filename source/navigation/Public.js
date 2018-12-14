// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { LatestPosts, ViewPost } from '../pages';

//Instruments
import { book } from './book';

export default class Public extends Component {
    render () {

        return (
            <Switch>
                <Route component = { LatestPosts } path = { book.latestPosts } />
                <Route component = { ViewPost } path = { book.viewPost } />
                <Redirect to = { book.latestPosts } />
            </Switch>
        );
    }
}
