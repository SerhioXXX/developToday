
// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Catcher, Post, Spinner } from '../components';

@connect((state) => ({ posts: state.posts }))
export default class ViewPost extends Component {
    render () {
        const id = this.props.match.params.id;
        const selectedPost = this.props.posts.find(
            (post) => post.get('id') === Number(id),
        );

        console.log('→ this.props', this.props, id);

        console.log('→ post', selectedPost);

        return <h1>{selectedPost.get('body')}</h1>;
    }
}
