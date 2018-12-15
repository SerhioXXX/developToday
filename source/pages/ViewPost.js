
// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Catcher, Post, Spinner } from '../components';

@connect((state) => ({ posts: state.posts }))
export default class ViewPost extends Component {
    render () {
        const id = this.props.match.params.id; //https://pshrmn.github.io/route-tester/#/post/2 поиграться с тестером роутов и посмотреть как создается объект match
        const selectedPost = this.props.posts.find(
            (post) => post.get('id') === Number(id),
        );

        console.log('→ this.props', this.props, id);

        console.log('→ post', selectedPost);

        return <h1>{selectedPost.get('body')}</h1>;
    }
}

/* npm path-to-regexp  (https://github.com/pillarjs/path-to-regexp)
Когда пути сопоставляются создается объект match который содержит свойства:

url — сопоставляемая часть текущего location.pathname
path — путь в компоненте Route
isExact — path в Route === location.pathname
params — объект содержит значения из path которые возвращает модуль path-to-regexp*/
