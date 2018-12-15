// Core
import React, { Component } from 'react';
//import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

// Components

import { history } from '../../init/middleware/core';
import { book } from '../../navigation/book';

export default class Post extends Component {
    _readPost = () => {
        const { actions, id } = this.props;

        actions.viewPostAsync(id);
    };

    _navigate = () => {
        console.log('------------history push url', `${book.posts}/${this.props.id}`);
        history.push(`${book.posts}/${this.props.id}`);
    };

    render () {
        const { body, title } = this.props;

        return (
            <section className = { Styles.post } onClick = { this._navigate }>
                <h1 onClick = { this._readPost }>{title}</h1>
                <p>{body}</p>
            </section>
        );
    }
}
//<time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
