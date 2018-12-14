// Core
import React, { Component } from 'react';

// Components
import { Catcher, Post, Spinner } from '../components';

export default class ViewPost extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Post />
            </Catcher>
        );
    }
}
