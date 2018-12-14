// Core
import React, { Component } from 'react';

// Components
import { Catcher, Posts, Spinner } from '../components';

export default class LatestPosts extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Posts />
            </Catcher>
        );
    }
}
