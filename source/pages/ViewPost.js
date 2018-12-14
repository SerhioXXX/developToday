// Core
import React, { Component } from 'react';

// Components
import { Catcher, Comments, Spinner } from '../components';

export default class ViewPost extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Comments />
            </Catcher>
        );
    }
}
