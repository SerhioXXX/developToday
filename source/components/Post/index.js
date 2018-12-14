// Core
import React, { Component } from 'react';
//import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

// Components

export default class Post extends Component {

    _readPost = () => {
        const { actions, id } = this.props;

        actions.viewPostAsync(id);
    };

    render () {
        const {
            body,
            title,
        } = this.props;

        //console.log('this.props//////////////////////', this.props);

        return (
            <section className = { Styles.post }>
                <h1 onClick = { this._readPost }>{title}</h1>
                <p>{body}</p>
            </section>
        );
    }
}
//<time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
