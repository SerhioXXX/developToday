// Core
import React, { Component } from 'react';
import { Map, List } from 'immutable';
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
            comments,
        } = this.props;

        //console.log('this.props//////////////////////', this.props);

        return (
            !!comments ?
                <section className = { Styles.post }>
                    <p> Запрос получения постов c данными [comments]</p>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </section>
                :
                <section className = { Styles.post }>
                    <p> Запрос получения постов без данных [comments]</p>
                    <h1 onClick = { this._readPost }>{title}</h1>
                    <p>{body}</p>
                </section>
        );
    }
}
//<time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
