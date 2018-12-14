// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';
import { Map } from 'immutable';

//Actions
import { postsActions } from '../../bus/posts/actions';
// Instruments
import Styles from './styles.m.css';

// Components
import { Catcher, Post } from '../../components';

const mapStateToProps = (state) => {
    return {
        post: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ viewCommentAsync: postsActions.viewCommentAsync }, dispatch),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ReadPost extends Component {

    componentDidMount () {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~componentDidMount in ReadPost~~~~~~~~~~~~~~~~~~~~~~');
    }

    render () {
        const { actions, post } = this.props;

        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~this.props in ReadPost~~~~~~~~~~~~~~~~~~~~~~~~~~~', this.props);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~Map.isMap(post)~~~~~~~~~~~~~~~~~~~~~~~~~~~', Map.isMap(post));
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~post.get(body)~~~~~~~~~~~~~~~~~~~~~~~~~~~', post.get('body'));
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~post.get(body)~~~~~~~~~~~~~~~~~~~~~~~~~~~', post.get('comments'));

        const postsJSX = () => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        //author = { post.get('author') }
                        body = { post.get('body') }
                        //created = { post.get('created') }
                        comments = { post.get('comments') }
                        id = { post.get('id') }
                        title = { post.get('title') }
                    />
                </Catcher>
            );
        };

        return (
            <section>
                <FlipMove>{postsJSX}</FlipMove>
                <h1>{post.get('title')}</h1>
                <p>{post.get('body')}</p>
            </section>
        );
    }

/*
    render () {
        const { posts, id } = this.props;

        console.log('this.state Comments-------->>', posts);
        console.log('this.props Comments-------->>', this.props);

        return (
            <section>
                <h1>Комментарии: {id}</h1>
            </section>
        );
    }*/
}
