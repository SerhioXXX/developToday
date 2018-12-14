
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
                <Route exact component = { LatestPosts } path = { book.posts } />
                <Route exact component = { ViewPost } path = { book.postById } />
                <Redirect to = { book.posts } />
            </Switch>
        );
    }
}
