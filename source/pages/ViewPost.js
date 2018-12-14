// Core
import React, { Component } from 'react';

// Components
import { Catcher, ReadPost, Spinner } from '../components';

export default class ViewPost extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <ReadPost />
            </Catcher>
        );
    }
}
